import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, filter} from 'rxjs/operators';
import {Photo} from '../models/photo.model';

/*  This service is to retrieve data from api,
its just to organize files and separate http fetches from normal services*/
@Injectable({
  providedIn: 'root'
})
export class PhotosApiService {

  constructor(private httpClient: HttpClient) {
  }

  getPhotos() {
    return this.httpClient.get<Photo[]>('https://picsum.photos/list')
      .pipe(map(
        (photos) => {
          /* The author is filtered here, it could be done anywhere else in the app, this will eliminate all other authors
           , In case we need to load other author and filter them in like a drop down we would have to remove filter*/
          return photos.filter(photo => photo.author.toLowerCase() === 'alejandro escamilla');
        }));


  }


}
