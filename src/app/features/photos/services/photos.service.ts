import {Injectable} from '@angular/core';
import {PhotosApiService} from './photos-api.service';
import {Observable} from 'rxjs';
import {Photo} from '../models/photo.model';


@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  photos: Photo[] = [];

  constructor(private photoApiService: PhotosApiService) {
  }


  /* Gets all the photos list from the API once and add it to the this.photos array, this is because if we move back and forth
  between component we would still have the data fetched and loaded to the service.*/
  getPhotos(): Observable<Photo[]> {
    return Observable.create((observer) => {
      // If photos has been fetched return this.photos else fetch
      if (this.photos.length > 0) {
        observer.next(this.photos);
        observer.complete();
      } else {
        this.photoApiService.getPhotos().subscribe(
          (photos: Photo[]) => {
            this.photos = photos;
            observer.next(this.photos);
            observer.complete();
          });
      }
    });

  }

}
