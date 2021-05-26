import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from '../types';
import {MoviesService } from './../movies.service';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeBannerComponent implements OnInit {
  constructor(private movieService: MoviesService) { }
  public original$: Observable<Movie[]> = this.movieService.getNetflixOriginal();
  public images = this.movieService.IMAGES;
  public moviePoster$!: Observable<Movie>;
  ngOnInit(): void {
    this.moviePoster$ = this.original$.pipe(
      map(movies => movies[Math.floor(Math.random() * movies.length)])
    );
  }
    
   movieBanner(poster: Movie): void {
     console.log(poster);
  } 
     
     
    
  

}
