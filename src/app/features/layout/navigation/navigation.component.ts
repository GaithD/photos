import {Component, ElementRef, EventEmitter, OnInit, Output} from '@angular/core';
import {WindowSizeService} from '../../shared/services/window-size.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: []
})
export class NavigationComponent implements OnInit {
  @Output() contentExpand = new EventEmitter<boolean>();

  smOpen = false;

  constructor(private elementRef: ElementRef, private windowSizeService: WindowSizeService) {
  }


  ngOnInit() {
    this.windowSizeAdapt();
    this.windowSizeService.resizeSubject.subscribe({
      next: () => {
        this.windowSizeAdapt();
      }
    });
  }


  windowSizeAdapt() {
    if (this.windowSizeService.isDesktop()) {
      this.openSm();
      this.shrinkContent();
    } else {
      this.closeSm();
      this.expandContent();
    }
  }

  openSm() {
    this.smOpen = true;
    this.contentExpand.emit(false);
  }

  closeSm() {
    this.smOpen = false;
    this.contentExpand.emit(true);
  }

  expandContent() {
    this.contentExpand.emit(true);
  }

  shrinkContent() {
    this.contentExpand.emit(false);

  }

  toggleSm() {
    this.smOpen = !this.smOpen;
    if (!this.windowSizeService.isTablet(true) && !this.windowSizeService.isMobile()) {
      if (this.smOpen) {
        this.shrinkContent();
      } else {
        this.expandContent();
      }
    }
  }

  itemSelected() {
    if (this.windowSizeService.isTablet(true) || this.windowSizeService.isMobile()) {
      this.smOpen = false;
    }
  }


}
