import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() hamburgerClicked = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
  }

  hamburgerClick() {
     this.hamburgerClicked.emit();
  }

}
