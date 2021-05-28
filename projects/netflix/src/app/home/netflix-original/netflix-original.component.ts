import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { MoviesService } from './../movies.service';
import { Movie, Show } from '../types';
import { Title } from './../types';
import { map } from 'rxjs/operators';

export enum ORIGINAL {
  shows = 'SHOWS',
  movies = 'MOVIES'
}
@Component({
  selector: 'app-netflix-original',
  templateUrl: './netflix-original.component.html',
  styleUrls: ['./netflix-original.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NetflixOriginalComponent implements OnInit {
  private media: BehaviorSubject<Title | undefined> =
                 new BehaviorSubject<Title | undefined>(undefined);
  
  @Input()
  get title(): Title | undefined {return this.media.value}
  set title(_title: Title | undefined) {this.media.next(_title)}
  
  public netflixOriginal$!: Observable<Movie[]>;
  public images = this.movieService.IMAGES;

  constructor(private movieService: MoviesService) { }
  ngOnInit(): void {
    this.media.pipe(
      map(_ => this.netflixOriginal$ = this.movieService.getNetflixOriginalMovies())
    ).subscribe();
  }
    
    


      
     
     
    

  getMovieInfo(movie: Movie): void {
    console.log(movie);
    
    
  }
    
}
