import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PhotosService} from '../services/photos.service';
import {Photo} from '../models/photo.model';

@Component({
  selector: 'app-photo-frame',
  templateUrl: './photo-frame.component.html',
  styleUrls: ['./photo-frame.component.scss']
})
export class PhotoFrameComponent implements OnInit {
  @Input() photoOB: Photo;

  constructor() {
  }

  ngOnInit() {

  }
}
