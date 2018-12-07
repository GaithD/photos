import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {MatButtonModule, MatIconModule, MatSidenavModule} from '@angular/material';

import {CommonModule} from '@angular/common';
import {NavigationComponent} from './navigation.component';
import {HeaderComponent} from './header/header.component';
import {SideNavComponent} from './side-nav/side-nav.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    RouterModule
  ],
  declarations: [
    NavigationComponent,
    HeaderComponent,
    SideNavComponent
  ],
  exports: [NavigationComponent]
})
export class NavigationModule {
}
