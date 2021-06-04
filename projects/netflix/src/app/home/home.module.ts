import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeBannerComponent } from './home-page-components/home-banner/home-banner.component';
import { NetflixOriginalComponent } from './home-page-components/netflix-original/netflix-original.component';
import { HomeMoviesRowComponent } from './home-movies-row/home-movies-row.component';
import { MovieTrailerComponent } from './home-page-components/movie-trailer/movie-trailer.component';
import { MovieInfoComponent } from './home-page-components/movie-info/movie-info.component';
import { OnSelectDirective } from '../directives/on-select.directive';
import { OnlikeDirective } from '../directives/onlike.directive';
import { OndislikeDirective } from '../directives/ondislike.directive';




@NgModule({
  declarations: [
    HomeComponent,
    HomeBannerComponent,
    HomeMoviesRowComponent,
    NetflixOriginalComponent,
    // MovieTrailerComponent,
    // MovieInfoComponent,
    OnSelectDirective,
    // OnlikeDirective,
    // OndislikeDirective,
    

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    // YouTubePlayerModule,
    
  ]
})
export class HomeModule { }
