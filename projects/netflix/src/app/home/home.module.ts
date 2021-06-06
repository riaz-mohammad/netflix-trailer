import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeBannerComponent } from './home-page-components/home-banner/home-banner.component';
import { NetflixOriginalComponent } from './home-page-components/netflix-original/netflix-original.component';
import { HomeMoviesRowComponent } from './home-movies-row/home-movies-row.component';



@NgModule({
  declarations: [
    HomeComponent,
    HomeBannerComponent,
    HomeMoviesRowComponent,
    NetflixOriginalComponent,
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
    
    
