import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UrlAddressService {
  public readonly BASE_URL = 'https://api.themoviedb.org/3';
  public readonly API_KEY = '214849890feefa84c31c1ba22d9ef072';
  public readonly IMAGES = 'https://image.tmdb.org/t/p/original/';
  public readonly MOVIE_INFO_URL = `${this.BASE_URL}/movie/${123}?api_key=${this.API_KEY}`;
  public readonly NETFLIX_ORIGINAL_URL = `${this.BASE_URL}/discover/tv?api_key=${this.API_KEY}&with_networks=213`;
  public readonly TRENDING_URL = `${this.BASE_URL}/trending/all/week?api_key=${this.API_KEY}`;
  public readonly POPULAR_MOVIES_URL = `${this.BASE_URL}/movie/popular?api_key=${this.API_KEY}&page=1`;
  public readonly SIMILAR_MOVIE_URL = `${this.BASE_URL}/movie/${123}/similar?api_key=${this.API_KEY}`;
  public readonly SIMILAR_SHOW_URL = `${this.BASE_URL}/tv/{tv_id}/similar?api_key=${this.API_KEY}page=1`;
  public readonly MOVIE_TRAILER_URL = `${this.BASE_URL}/movie/${123}/videos?api_key=${this.API_KEY}`;
  public readonly SHOW_TRAILER_URL = `${this.BASE_URL}/tv/${123}/videos?api_key=${this.API_KEY}`;
  public readonly SEARCH_URL = `${this.BASE_URL}/search/multi?api_key=${this.API_KEY}&query=''`;
  public readonly MOVIES_GENRES_URL = `${this.BASE_URL}/genre/movie/list?api_key=${this.API_KEY}`;
  public readonly SHOWS_GENRES_URL = `${this.BASE_URL}/genre/tv/list?api_key=${this.API_KEY}`;
  public readonly MOVIES_BY_GENRES_URL = `${this.BASE_URL}/discover/movie?api_key=${this.API_KEY}&with_genres=28`;
  public readonly SHOWS_BY_GENRES_URL = `${this.BASE_URL}/discover/tv?api_key=${this.API_KEY}&with_genres=28`;
  public readonly GET_MOVIE_BY_NAME_URL = `${this.BASE_URL}/search/movie?api_key=${this.API_KEY}&query=''`;
  public readonly GET_SHOW_BY_NAME_URL = `${this.BASE_URL}/search/tv?api_key=${this.API_KEY}&query=''`;



}
