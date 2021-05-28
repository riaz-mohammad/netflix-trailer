import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, Input } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Show } from './../types';
import { Movie } from '../types';

@Component({
  selector: 'app-home-movies-row',
  templateUrl: './home-movies-row.component.html',
  styleUrls: ['./home-movies-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeMoviesRowComponent implements OnInit{
  @Input() title!: string;
  @Input() genre!: string;
  constructor(private moviesService: MoviesService) {}
  public images = this.moviesService.IMAGES;
  public trending = this.moviesService.getTrending();

  


  ngOnInit(): void {
    console.log();
  }

  getMovieInfo(movie: Movie | Show): void {
    console.log(movie);
  }



}
  

  
  
  
