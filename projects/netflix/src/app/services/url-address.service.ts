import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UrlAddressService {
  public readonly BASE_URL = 'https://api.themoviedb.org/3';
  public readonly API_KEY = '214849890feefa84c31c1ba22d9ef072';
  public readonly IMAGES = 'https://image.tmdb.org/t/p/original/';
  public readonly MOVIES_GENRES_URL = `${this.BASE_URL}/discover/movie?api_key=${this.API_KEY}&with_genres=`;
  public readonly SHOWS_GENRES_URL = `${this.BASE_URL}/discover/tv?api_key=${this.API_KEY}&with_genres=`;
}
  

