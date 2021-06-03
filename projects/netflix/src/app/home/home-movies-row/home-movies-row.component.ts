import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Media } from '../../types/types';


@Component({
  selector: 'app-home-movies-row',
  templateUrl: './home-movies-row.component.html',
  styleUrls: ['./home-movies-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeMoviesRowComponent implements OnInit{
  constructor(private moviesService: MoviesService) {}
  public images = this.moviesService.IMAGES;
  public trending!: Observable<Media[]>;
  

  


  ngOnInit(): void {
    console.log();
    this.trending = this.moviesService.getMedia('TRENDING');
  }

  getMovieInfo(movie: Media): void {
    console.log(movie);
  }



}
  

  
  
  
