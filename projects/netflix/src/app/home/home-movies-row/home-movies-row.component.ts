import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MoviesService } from '../movies.service';
import { Movie } from '../types';

@Component({
  selector: 'app-home-movies-row',
  templateUrl: './home-movies-row.component.html',
  styleUrls: ['./home-movies-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeMoviesRowComponent implements OnInit, OnDestroy {
  @Input() title!: string;
  @Input() genre!: string;
  constructor(private moviesService: MoviesService) {}
  public images = this.moviesService.IMAGES;
  public trending = this.moviesService.getTrending();
  public sub!: Subscription;


  ngOnInit(): void {
    console.log('Initiated...');
  }

  getMovieInfo(movie: Movie): void {
    this.sub = this.moviesService.getMovieTrailer(movie.id).subscribe(console.log);
    
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
