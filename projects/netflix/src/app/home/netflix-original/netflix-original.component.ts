import { MoviePreviewService } from '../../services/movie-preview.service';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { MoviesService } from '../../services/movies.service';
import { Media } from '../types';
import { Title } from '../types';


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
  private _title!: Title;
  @Input()
  get title(): Title {return this._title}
  set title(title: Title) { this._title = title}
  
  public netflixOriginal$!: Observable<Media[]>;
  public images = this.movieService.IMAGES;

  constructor(private movieService: MoviesService,
              private moviePreview: MoviePreviewService) { }
  ngOnInit(): void {
    console.log();
    this.netflixOriginal$ = this.movieService.getMedia(this._title);
  }
    
    

  getMovieInfo(movie: Media): void {
    this.moviePreview.showMovieInfo(movie);
  }
    
    
    
    

}

      
     
     
    
