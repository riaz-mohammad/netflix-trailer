import { ShareModule } from './../share/share.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { MovieComponent } from './movie/movie.component';


@NgModule({
  declarations: [
    MoviesComponent,
    MovieComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    ShareModule
  ]
})
export class MoviesModule { }
