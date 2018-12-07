import {Directive, ElementRef, NgModule, OnInit} from '@angular/core';

import {WindowSizeService} from '../services/window-size.service';

@Directive({
  selector: '[appHideOnMobile]'
})
export class HideOnMobileDirective implements OnInit {

  constructor(private elementRef: ElementRef, private windowSizeService: WindowSizeService) {
  }


  ngOnInit() {
    this.doHide();
    this.windowSizeService.resizeSubject.subscribe({
      next: () => {
        this.doHide();
      }
    });
  }


  doHide() {
    if (this.windowSizeService.isMobile()) {
      this.elementRef.nativeElement.style.display = 'none';
    } else {
      this.elementRef.nativeElement.style.display = '';
    }
  }

}

@NgModule({
  declarations: [HideOnMobileDirective],
  exports: [HideOnMobileDirective]
})
export class HideOnMobileModule {
  constructor() {
  }
}


