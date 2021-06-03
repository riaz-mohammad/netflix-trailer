import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UrlAddressService } from './url-address.service';
import { Media, Results, ShowGenre } from '../types/types';
import { SHOWS_GENRES } from './../types/shows-genres';
import { ShowGenreName } from './../types/types';




@Injectable({
  providedIn: 'root',
})
export class ShowsPageService {
  constructor(private connection: UrlAddressService,
              private http: HttpClient) { }
  public images = this.connection.IMAGES;
  public getShows(genre: ShowGenreName): Observable<Media> {
    return this.http
      .get<Results<Media>>(this.connection.SHOWS_GENRES_URL + this.findGenreId(genre))
      .pipe(
        map(({ results } ) => results)
        );
  }

  private findGenreId(genre: ShowGenreName): number {
     return SHOWS_GENRES
      .find(
        (showGenre: ShowGenre) => showGenre.name === genre
      )?.id as number;
  }
    
}
  
  
  
  
