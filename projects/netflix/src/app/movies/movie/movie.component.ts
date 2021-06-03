
import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy, Input, ViewEncapsulation } from '@angular/core';
import { MoviesPageService } from '../../services/movies-page.service';
import { Movie, MovieGenreName } from '../../types/types';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieComponent implements OnInit {
  @Input() genre!: MovieGenreName;
  constructor(private moviesService: MoviesPageService) {}
  public images = this.moviesService.images;
  public movies!: Observable<Movie[]>
  ngOnInit(): void {
    this.movies = this.moviesService.getMovies(this.genre);
  }
    

  public getMovieInfo(movie: Movie): void {
    console.log({Movie: movie});
  }
}
