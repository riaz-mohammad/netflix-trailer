import { Component, OnInit, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {  Media } from '../../../types/types';
import { VideoIdService } from '../../../services/video-id.service';
import {MoviesService } from '../../../services/movies.service';
import { bannerAnimation, buttonAnimation, overViewAnimation } from '../../../animations/banner-animation';


@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss'],
  animations: [bannerAnimation, buttonAnimation, overViewAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeBannerComponent implements OnInit {
  constructor(
    private movieService: MoviesService,
    private videoIdService: VideoIdService
  ) {}
  public images = this.movieService.IMAGES;
  public moviePoster$!: Observable<Media>;
  ngOnInit(): void {
    // TO PICK A RANDOM MOVIE/SHOW FOR BANNER
    this.moviePoster$ = this.movieService
      .getMedia('TRENDING')
      .pipe(
        map(
          (movies: Media[]) => movies[Math.floor(Math.random() * movies.length)]
        )
      );
  }

  movieBanner(media: Media): void {
    this.videoIdService.findTrailer(media);
  }
}
     
     
     
     
     
     
     
    
  

