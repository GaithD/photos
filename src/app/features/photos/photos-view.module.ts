import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PhotosViewRoutingModule} from './photos-view-routing.module';
import {PhotosComponent} from './photos.component';
import {PhotoFrameComponent} from './photo-frame/photo-frame.component';


@NgModule({
  imports: [
    CommonModule,
    PhotosViewRoutingModule,
  ],
  declarations: [PhotosComponent, PhotoFrameComponent],
  providers: []
})
export class PhotosViewModule {
}

