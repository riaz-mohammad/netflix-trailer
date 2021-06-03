


import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { UrlAddressService } from './url-address.service';
import { Media, Movie, MovieGenre, MovieGenreName, Results } from '../types/types';
import { MOVIES_GENRES } from './../types/movies-genres';


@Injectable({
  providedIn: 'root',
})
export class MoviesPageService {
  constructor(private connection: UrlAddressService,
              private http: HttpClient) { }
  public images = this.connection.IMAGES;
  public getMovies(genre: MovieGenreName): Observable<Movie[]> {
    return this.http
      .get<Results<Movie[]>>(this.connection.MOVIES_GENRES_URL + this.findGenreId(genre))
      .pipe(
        map(({ results }) => results)
       );
  }

  private findGenreId(genre: MovieGenreName): number {
    return MOVIES_GENRES.find(
            (moviesGenre: MovieGenre) => moviesGenre.name === genre
            )?.id as number
  }
    
}
  
    
  
  
