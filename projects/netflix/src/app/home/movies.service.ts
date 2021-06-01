import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


import { Media, TrailerKey, Results, Trailer, Title } from './types';

export enum NETFLIX {
  TRENDING         = 'TRENDING',
  ORIGINAL_SHOWS   = 'ORIGINAL SHOWS',
  ORIGINAL_MOVIES  = 'ORIGINAL MOVIES',
  POPULAR_MOVIES   = 'POPULAR MOVIES',
  POPULAR_SHOWS    = 'POPULAR SHOWS',
  TOP_RATED_MOVIES = 'TOP RATED MOVIES',
  TOP_RATED_SHOWS  = 'TOP RATED SHOWS',
  SIMILAR_MOVIES   = 'SIMILAR MOVIES',
  SIMILAR_SHOWS    = 'SIMILAR SHOWS',
}
  




@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private readonly BASE_URL = 'https://api.themoviedb.org/3';
  private readonly API_KEY = '214849890feefa84c31c1ba22d9ef072';
  public readonly IMAGES = 'https://image.tmdb.org/t/p/original/';
  MOVIE_INFO_URL = `${this.BASE_URL}/movie/${123}?api_key=${this.API_KEY}`;
  NETFLIX_ORIGINAL_MOVIES_URL = `${this.BASE_URL}/discover/movie?api_key=${this.API_KEY}&with_networks=213`;
  NETFLIX_ORIGINAL_SHOWS_URL = `${this.BASE_URL}/discover/tv?api_key=${this.API_KEY}&with_networks=213`;
  TOP_RATED_MOVIES_URL =  `${this.BASE_URL}/movie/top_rated?api_key=${this.API_KEY}&page=2`
  TOP_RATED_SHOWS_URL =  `${this.BASE_URL}/tv/top_rated?api_key=${this.API_KEY}&page=2`
  TRENDING_URL = `${this.BASE_URL}/trending/all/week?api_key=${this.API_KEY}`;
  POPULAR_MOVIES_URL = `${this.BASE_URL}/movie/popular?api_key=${this.API_KEY}&page=1`;
  POPULAR_SHOWS_URL = `${this.BASE_URL}/tv/popular?api_key=${this.API_KEY}&page=1`;
  SIMILAR_MOVIE_URL = `${this.BASE_URL}/movie/${123}/similar?api_key=${this.API_KEY}`;
  SIMILAR_SHOW_URL = `${this.BASE_URL}/tv/{tv_id}/similar?api_key=${this.API_KEY}page=1`;
  MOVIE_TRAILER_URL = `${this.BASE_URL}/movie/${123}/videos?api_key=${ this.API_KEY}`;
  SHOW_TRAILER_URL = `${this.BASE_URL}/tv/${123}/videos?api_key=${this.API_KEY}`;
  SEARCH_URL = `${this.BASE_URL}/search/multi?api_key=${this.API_KEY}&query=''`;
  MOVIES_GENRES_URL = `${this.BASE_URL}/genre/movie/list?api_key=${this.API_KEY}`;
  SHOWS_GENRES_URL = `${this.BASE_URL}/genre/tv/list?api_key=${this.API_KEY}`;
  MOVIES_BY_GENRES_URL = `${this.BASE_URL}/discover/movie?api_key=${this.API_KEY}&with_genres=`;
  SHOWS_BY_GENRES_URL = `${this.BASE_URL}/discover/tv?api_key=${this.API_KEY}&with_genres=`;
  GET_MOVIE_BY_NAME_URL = `${this.BASE_URL}/search/movie?api_key=${this.API_KEY}&query=''`;
  GET_SHOW_BY_NAME_URL = `${this.BASE_URL}/search/tv?api_key=${this.API_KEY}&query=''`;

  constructor(private http: HttpClient) { }
  
  private getNetflixMedia(url: string): Observable<Media[]> {
    return this.http
      .get<Results<Media[]>>(url)
       .pipe(
          map(({ results }) => results))
    }
  
  public getMedia(title: Title): Observable<Media[]> {
         switch (title) {
           case NETFLIX.TRENDING:
             return this.getNetflixMedia(this.TRENDING_URL);
           case NETFLIX.ORIGINAL_MOVIES:
             return this.getNetflixMedia(this.NETFLIX_ORIGINAL_MOVIES_URL);
           case NETFLIX.ORIGINAL_SHOWS:
             return this.getNetflixMedia(this.NETFLIX_ORIGINAL_SHOWS_URL);
           case NETFLIX.POPULAR_MOVIES:
             return this.getNetflixMedia(this.POPULAR_MOVIES_URL);
           case NETFLIX.POPULAR_SHOWS:
             return this.getNetflixMedia(this.POPULAR_SHOWS_URL);
           case NETFLIX.TOP_RATED_MOVIES:
             return this.getNetflixMedia(this.TOP_RATED_MOVIES_URL);
           case NETFLIX.TOP_RATED_SHOWS:
             return this.getNetflixMedia(this.TOP_RATED_SHOWS_URL);
           case NETFLIX.SIMILAR_MOVIES:
             return this.getNetflixMedia(this.SIMILAR_MOVIE_URL);
           case NETFLIX.SIMILAR_SHOWS:
             return this.getNetflixMedia(this.SIMILAR_SHOW_URL);
           
           default:
             return of([])
             
         }
  }

  
  public getTrailer(media: Media): Observable<TrailerKey[]> {
    const SHOW_TRAILER_URL = `${this.BASE_URL}/tv/${media.id}/videos?api_key=${this.API_KEY}`;
    const MOVIE_TRAILER_URL = `${this.BASE_URL}/movie/${media.id}/videos?api_key=${this.API_KEY}`;
    //tv shows has name in the return data
    //if the pass media object has name then it's a tv show,
      if (media.name) {
        return this.http
          .get<Results<TrailerKey[]>>(SHOW_TRAILER_URL)
          .pipe(
            map(({ results }) => results)
          )
            
      } else if(media.title) {
        //movies has title in the return data
          return this.http
            .get<Results<TrailerKey[]>>(MOVIE_TRAILER_URL)
            .pipe(
              map(({ results }) => results)
            );
          }
          
       return of([{ key: '', type: 'Trailer'}]); 
        
  }
    


  public search(name: string) {
    return this.http.get<any>(this.SEARCH_URL + name);
  }
  
}
