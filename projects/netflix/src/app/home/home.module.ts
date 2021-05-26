import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YouTubePlayerModule } from '@angular/youtube-player';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { NetflixOriginalComponent } from './netflix-original/netflix-original.component';
import { HomeMoviesRowComponent } from './home-movies-row/home-movies-row.component';
import { MovieTrailerComponent } from './movie-trailer/movie-trailer.component';



@NgModule({
  declarations: [
    HomeComponent,
    HomeBannerComponent,
    HomeMoviesRowComponent,
    NetflixOriginalComponent,
    MovieTrailerComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    YouTubePlayerModule
  ]
})
export class HomeModule { }
