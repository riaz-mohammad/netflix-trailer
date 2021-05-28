import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MoviesService } from './../movies.service';

@Component({
  selector: 'app-home-movies',
  templateUrl: './home-movies.component.html',
  styleUrls: ['./home-movies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeMoviesComponent implements OnInit {

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    console.log('Movies Component');
  }

}
