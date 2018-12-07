import {AfterViewInit, Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Menuitem} from './features/shared/models/menu-item.model';
import {NavigationStart, Router} from '@angular/router';
import {MenuItemsService} from './features/shared/services/menu-items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('appContentExpandShrink', [

      state('expand', style({
        'margin-left': '0',
         visibility: 'visible',

      })),
      state('shrink', style({
        visibility: 'visible',

      })),

      transition('expand <=> shrink', [
        animate('0.2s'),
      ]),

      transition('* <=> *', [
        animate('0s'),
      ]),

    ])
  ]
})
export class AppComponent implements AfterViewInit {
  title = 'photos';

  appContentExpanded = true;

  constructor(private router: Router, private menuService: MenuItemsService) {

  }

  contentToggle(expand: boolean) {
    this.appContentExpanded = expand;
  }


  ngAfterViewInit() {
    const routerEvent = this.router.events.subscribe((value: NavigationStart) => {
      Menuitem.markItemActiveFromLink(this.menuService.sideMenuItems, value.url);
      routerEvent.unsubscribe();
    });
  }
}
