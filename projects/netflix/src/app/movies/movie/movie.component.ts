import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { MoviesPageService } from '../../services/movies-page.service';
import { MovieGenreName } from '../../types/types';

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
  ngOnInit(): void {
    this.moviesService.getMovies(this.genre).subscribe(console.log);
  }
}
