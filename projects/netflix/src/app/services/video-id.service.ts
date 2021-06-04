import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { MoviesService } from './movies.service';
import { Media, TrailerKey } from '../types/types';

@Injectable({
  providedIn: 'root',
})
export class VideoIdService {
  private sourceIds = new Subject<TrailerKey>();
  public trailerKey$ = this.sourceIds.asObservable();
  private sub!: Subscription;
  
  constructor(private movieService: MoviesService) {}

  public findTrailer(media: Media): void {
    this.sub = this.movieService.getTrailer(media)
      .pipe(
        // map(data => data.filter(data => data.type === ('Trailer' || 'Teaser'))),
        // tap(data => console.log({trailer: data})),
        map(trailers => trailers[0])
      )
      .subscribe(data => (
        this.sourceIds.next(data),
        this.sub.unsubscribe()
      ));
  }

  
  public removeTrailer(): void {
    this.sourceIds.next(undefined);
  }
}
