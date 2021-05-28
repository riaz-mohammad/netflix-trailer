import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie, Show } from './../types';

import {MoviesService } from './../movies.service';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeBannerComponent implements OnInit {
  constructor(private movieService: MoviesService) { }
  public images = this.movieService.IMAGES;
  public moviePoster$!: Observable<Movie | Show>;
  ngOnInit(): void {
    this.moviePoster$ = this.movieService.getTrending().pipe(
      map((movies: Movie[] | Show[]) => movies[Math.floor(Math.random() * movies.length)])
    );
  }
    
   movieBanner(poster: Show | Movie): void {
     console.log(poster);
  } 

}
     
     
     
     
     
     
     
    
  

