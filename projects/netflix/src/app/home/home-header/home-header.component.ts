import { Observable } from 'rxjs';
import { MoviesService, Movie, } from './../movies.service';
import { Component, OnInit, ChangeDetectionStrategy, ViewChild, AfterViewInit } from '@angular/core';

import { URLS, IMAGES } from './../urls';



@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeHeaderComponent implements OnInit {
  constructor(private moviesService: MoviesService) {}
  public images = IMAGES;
  public data = this.moviesService.getTrending();

  ngOnInit(): void {
    console.log('Initiated...');
    this.data.subscribe(console.log);
  }
  public getMovieInfo(movie: Movie): void {
    let trailer: Observable<any> = this.moviesService.getMovieTrailer(movie.id);
    trailer.subscribe(console.log);
    
    
  }
    
  


}
    
    
    
      

      
