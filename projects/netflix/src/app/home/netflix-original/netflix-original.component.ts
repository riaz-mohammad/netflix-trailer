import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesService } from './../movies.service';
import { Movie } from '../types';

@Component({
  selector: 'app-netflix-original',
  templateUrl: './netflix-original.component.html',
  styleUrls: ['./netflix-original.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NetflixOriginalComponent implements OnInit {
  constructor(private movieService: MoviesService) {}
  public netflixOriginal!: Observable<Movie[]>;
  public images = this.movieService.IMAGES;
  ngOnInit(): void {
    this.netflixOriginal = this.movieService.getNetflixOriginal();
  }
    

  getMovieInfo(movie: Movie): void {
    console.log(movie);
  }
    
}
