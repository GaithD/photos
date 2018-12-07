import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Router} from '@angular/router';

import {Menuitem} from '../../../shared/models/menu-item.model';
import {MenuItemsService} from '../../../shared/services/menu-items.service';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  animations: [
    trigger('smToggleItems', [

      state('open', style({
        transform: 'rotate(180deg)',
      })),
      state('closed', style({
        transform: 'rotate(0)',
      })),

      transition('* => *', [
        animate('0.2s'),
      ]),

    ]),
    trigger('smToggleSubMenu', [

      state('open', style({
        display: 'block',
        height: '100%',
        opacity: 1,

      })),
      state('closed', style({
        height: '0',
        opacity: 0,
        display: 'none',

      })),

      transition('open <=> closed', [
        animate('0.2s')
      ]),

      // transition('closed => open', [
      //   animate('0.4s')
      // ]),

    ]),
    trigger('smCloseOpen', [

      state('open', style({
        transform: 'translateX(0)',
      })),
      state('closed', style({
        transform: 'translateX(-100%)'
      })),

      transition('open <=> closed', [
        animate('0.2s'),
      ]),

      transition('* => *', [
        animate('0s'),
      ]),

    ]),

  ]
})
export class SideNavComponent implements OnInit {

  @Input() sideMenuOpen = false;
  @Output() itemSelected = new EventEmitter<void>();

  sideMenuItems: Menuitem[] = [];

  constructor(private router: Router, private menuService: MenuItemsService) {

    this.sideMenuItems = this.menuService.sideMenuItems;
  }


  meuItemClick(menuItem: Menuitem) {
    if (menuItem.child.length > 0) {
      menuItem.active = !menuItem.active;
    } else {
      this.router.navigate([menuItem.path]);
      Menuitem.resetItemsActive(this.sideMenuItems);
      menuItem.active = true;
      setTimeout(() => {
        this.itemSelected.emit();
      }, 0);

    }
  }

  ngOnInit() {

  }


}
