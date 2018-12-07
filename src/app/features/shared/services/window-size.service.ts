import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WindowSizeService {

  resizeSubject = new Subject<number>();

  innerWidth = 0;

  // Break Points
  private superBigDesktop = 1701;
  private bigDesktop = 1400;
  private desktop = 900;
  private tablet = 501;
  private mobile = 500;

  constructor() {
    this.innerWidth = +window.innerWidth;
    this.resizeSubject.next(this.innerWidth);

    window.addEventListener('resize', () => {
      this.innerWidth = +window.innerWidth;
      this.resizeSubject.next(this.innerWidth);
    });

  }

  isMobile() {
    return this.innerWidth <= this.mobile;
  }

  isTablet(exact = false): boolean {
    if (exact) {
      return this.innerWidth > this.mobile && this.innerWidth < this.desktop;
    }
    return this.innerWidth > this.tablet;
  }

  isDesktop(exact = false) {
    if (exact) {
      return this.innerWidth > this.tablet && this.innerWidth < this.bigDesktop;
    }
    return this.innerWidth > this.desktop;
  }

  isBigDesktop(exact = false) {
    if (exact) {
      return this.innerWidth > this.desktop && this.innerWidth < this.superBigDesktop;
    }
    return this.innerWidth > this.bigDesktop;
  }

  isSuperBigDesktop() {
    return this.innerWidth >= this.superBigDesktop;
  }


}
