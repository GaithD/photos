import {Component, OnInit} from '@angular/core';
import {Photo} from './models/photo.model';
import {PhotosService} from './services/photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  photos: Photo[] = [];
  selectedPhotoOB: Photo;
  currentSelectedIndex = -1;

  constructor(private photosService: PhotosService) {
  }

  ngOnInit() {
    this.photosService.getPhotos().subscribe(
      (photos: Photo[]) => {
        this.photos = photos;
      });
  }

  selectImage(i) {
    this.currentSelectedIndex = i;
    this.modalChangePic();
  }

  nextBackImage(i) {
    this.currentSelectedIndex = this.currentSelectedIndex + i;

    if (this.currentSelectedIndex < 0) {
      this.currentSelectedIndex = this.photos.length - 1;
    } else if (this.currentSelectedIndex > this.photos.length - 1) {
      this.currentSelectedIndex = 0;
    }
    this.modalChangePic();
  }

  modalChangePic() {
    if (this.currentSelectedIndex > -1) {
      this.selectedPhotoOB = this.photos[this.currentSelectedIndex];
    }
  }

  unSelectPhoto() {
    this.currentSelectedIndex = -1;
    this.selectedPhotoOB = null;
  }


}
