import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShowsPageService {
  private readonly BASE_URL = 'https://api.themoviedb.org/3';
  private readonly API_KEY = '214849890feefa84c31c1ba22d9ef072';
  public readonly IMAGES = 'https://image.tmdb.org/t/p/original/';
  private readonly ORIGINAL_SHOWS =
    `${this.BASE_URL}/discover/tv?api_key=${this.API_KEY}&with_networks=213`;
  private readonly LATEST_SHOWS =
    `${this.BASE_URL}/tv/latest?api_key=${this.API_KEY}&language=en-US`;
  private readonly POPULAR_SHOWS =
    `${this.BASE_URL}/tv/popular?api_key=${this.API_KEY}&language=en-US&page=1`;
  private readonly TOP_RATED_SHOWS =
    `${this.BASE_URL}/tv/top_rated?api_key=${this.API_KEY}&language=en-US&page=1`;
  private readonly TRENDING_URL =
    `${this.BASE_URL}/trending/tv/week?api_key=${this.API_KEY}`;
  private readonly SHOW_TRAILER_URL =
    `${this.BASE_URL}/tv/${123}/videos?api_key=${this.API_KEY}`;
  private readonly SHOWS_BY_GENRES_URL =
    `${this.BASE_URL}/discover/tv?api_key=${this.API_KEY}&with_genres=`;
  
  constructor(private http: HttpClient) {}
  public getOriginalShows(): any {}
  public getLatestShows(): any {}
  public getPopularShows(): any {}
  public getTopRatedShows(): any {}
  public getSimilarShows(): any {}
  public getTrending(): any {}
}
