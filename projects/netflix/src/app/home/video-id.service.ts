import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { MoviesService } from './movies.service';
import { Media, TrailerKey } from './types';
export enum TRAILER {
  MOVIE_TRAILER = 'MOVIE TRAILER',
  SHOW_TRAILER  = 'SHOW TRAILER'
}

@Injectable({
  providedIn: 'root',
})
export class VideoIdService {
  private sourceIds = new Subject<TrailerKey>();
  public trailerKey$ = this.sourceIds.asObservable();
  
  constructor(private movieService: MoviesService) {}

  public findTrailer(media: Media): void {
    
    this.movieService.getTrailer(media)
      .pipe(
        map(data => data.filter(data => data.type === 'Trailer')),
        map(trailers => trailers[0])
      )
        
      .subscribe(data => this.sourceIds.next(data));
        
  }

  
  public removeTrailer(): void {
    this.sourceIds.next(undefined);
  }
}
