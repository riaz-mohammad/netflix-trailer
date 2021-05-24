import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface MOVIES  {
  genre_ids: Array<number>;
  id: number;
  title: string;
  release_data: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
}

interface Results {
  results: MOVIES[];
}

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private readonly NETFLIX_URL = 'https://api.themoviedb.org/3';
  private readonly API_KEY = '214849890feefa84c31c1ba22d9ef072';
  private readonly TRENDING = `${this.NETFLIX_URL}/trending/all/week?api_key=${this.API_KEY}`;
  private readonly MOVIE_TRAILER = `${this.NETFLIX_URL}/movie/${123}/videos?api_key=${this.API_KEY}`;
  private readonly SHOW_TRAILER = `${this.NETFLIX_URL}/tv/${123}/videos?api_key=${this.API_KEY}`;
  private readonly MOVIE_INFO = `${this.NETFLIX_URL}/movie/${123}?api_key=${this.API_KEY}`;
  private readonly SIMILAR_MOVIE = `${this.NETFLIX_URL}/movie/${123}/similar?api_key=${this.API_KEY}`;
  private readonly SIMILAR_SHOW = `${this.NETFLIX_URL}/tv/{tv_id}/similar?api_key=${this.API_KEY}page=1`;
  private readonly GENRE_MOVIES = `${this.NETFLIX_URL}/genre/movie/list?api_key=${this.API_KEY}`;
  private readonly GENRE_SHOWS = `${this.NETFLIX_URL}/genre/tv/list?api_key=${this.API_KEY}`;
  private readonly GENRE_MOVIES_SPECIFIC = `${this.NETFLIX_URL}/discover/movie?api_key=${this.API_KEY}&with_genres=28`;
  private readonly GENRE_SHOWS_SPECIFIC = `${this.NETFLIX_URL}/discover/tv?api_key=${this.API_KEY}&with_genres=28`;
  private readonly POPULAR_MOVIES = `${this.NETFLIX_URL}/movie/popular?api_key=${this.API_KEY}&page=1`;
  private readonly GET_MOVIE_BY_NAME = `${this.NETFLIX_URL}/search/movie?api_key=${this.API_KEY}&query=${'MOVIE NAME'}`;
  private readonly GET_SHOW_BY_NAME = `${this.NETFLIX_URL}/search/tv?api_key=${this.API_KEY}&query=${'SHOW NAME'}`;
  private readonly SEARCH = `${this.NETFLIX_URL}/search/multi?api_key=${this.API_KEY}&query=${'SHOW OR MOVIE NAME'}`;
  
  public readonly IMAGES = 'https://image.tmdb.org/t/p/original/';
  constructor(private http: HttpClient) { }
  
  public getMovies(): Observable<any> {
    return of();
  }

  // return a movie/series/animation netflix's trailer from Youtube
  public getTrailer(movieId: string): Observable<any> {
    return of();
  }

  //return all the Trending Movies, Shows, Animation
  public getTrending(): Observable<any> {
      return this.http.get<any>(this.TRENDING);
  }
    
}
