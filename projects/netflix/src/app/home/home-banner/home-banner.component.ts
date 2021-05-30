import { VideoIdService } from './../video-id.service';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {  Media } from './../types';

import {MoviesService } from './../movies.service';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeBannerComponent implements OnInit {
  constructor(private movieService: MoviesService,
              private videoIdService: VideoIdService) { }
  public images = this.movieService.IMAGES;
  public moviePoster$!: Observable<Media>;
  ngOnInit(): void {
    this.moviePoster$ = this.movieService.getMedia('TRENDING').pipe(
       map((movies: Media[]) => movies[Math.floor(Math.random() * movies.length)])
    );
  }
    
   movieBanner(media: Media): void {
     this.videoIdService.findTrailer(media);
  } 

}
     
     
     
     
     
     
     
    
  

