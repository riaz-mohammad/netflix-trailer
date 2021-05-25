import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { API_KEY, BASE_URL, URLS } from './urls';

export interface Movie  {
  genre_ids: Array<number>;
  id: number;
  title: string;
  release_data: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
}

interface Results {
  results: Movie[];
}


export interface Key {
  key: string;
}
 

export interface MovieTrailer {
  results: Array<any>;
}

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) { }
  
  public getTrending(): Observable<Results> {
    return this.http.get<Results>(URLS.TRENDING_URL);
  }
  
  public getMovieTrailer(id: number): Observable<any> {
    const MOVIE_TRAILER = `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`;
    return this.http.get<MovieTrailer>(MOVIE_TRAILER).pipe(
      map(({ results }) => results?.[0] ?? 'Not Found'),
      catchError((error) => of(error))
    );
      
  }

}
