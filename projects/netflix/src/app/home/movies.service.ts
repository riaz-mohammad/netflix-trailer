import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { SHOWS_GENRES } from './shows-genres';
import { Movie, MovieTrailer, Results, Show, Title } from './types';

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
  TOP_RATED_URL =  `${this.BASE_URL}/movie/top_rated?api_key=${this.API_KEY}&page=2`
  TRENDING_URL = `${this.BASE_URL}/trending/all/week?api_key=${this.API_KEY}`;
  POPULAR_MOVIES_URL = `${this.BASE_URL}/movie/popular?api_key=${this.API_KEY}&page=1`;
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

  constructor(private http: HttpClient) {}

  public getTrending(): Observable<Movie[] | Show[]> {
    return this.http.get<Results<Movie[] | Show[]>>(this.TRENDING_URL).pipe(
      map(({ results }) => results)
    );
  }

  public getMovieTrailer(id: number): Observable<any> {
    const movieTrailer_url = `${this.BASE_URL}/movie/${id}/videos?api_key=${ this.API_KEY}`;
    return this.http.get<MovieTrailer>(movieTrailer_url);
      
    //   .pipe(
    //   map(({ results }) => results?.[0] ?? 'Not Found'),
    //   catchError((error) => of(error))
    // );
  }

  public getNetflixOriginalMovies(): Observable<Movie[]> {
    return this.http
      .get<Results<Movie[]>>(this.NETFLIX_ORIGINAL_MOVIES_URL)
      .pipe(
        tap(data => console.log('Original Movies', data)),
        map(({ results }) => results))
  }

  public getNetflixOriginalShows(): Observable<Show[]> {
    return this.http
      .get<Results<Show[]>>(this.NETFLIX_ORIGINAL_SHOWS_URL)
      .pipe(
        tap(data => console.log('Original Shows', data)),
        map(({ results }) => results))
  }

  public getMoviesByGenre(genre: number): void {
    this.http.get<any>(this.MOVIES_BY_GENRES_URL + genre);
  }

  public getShowByGenre(genre: number): void {
    this.http.get<any>(this.SHOWS_BY_GENRES_URL + genre);
  }
 
  private get randomGenre(): number {
    return SHOWS_GENRES[Math.floor(Math.random() * SHOWS_GENRES.length)].id;
  }


  public search(name: string) {
    return this.http.get<any>(this.SEARCH_URL + name);
  }
  
}
