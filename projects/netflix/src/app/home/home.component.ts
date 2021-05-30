import { Observable } from 'rxjs';
import { MoviesService } from './movies.service';
import { showOrHide } from './../landing-page/loading-animation';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { VideoIdService } from './video-id.service';
import { MoviePreviewService } from './movie-preview.service';
import { moveOutPreview, moviePreviewAnimation } from './movie-preview-animation';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [moveOutPreview],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  constructor(
    private videoIdService: VideoIdService,
    private moviePreview: MoviePreviewService,
    private movieService: MoviesService
  ) {}
  
  //video id Observable to pass to the trailer component in the template
  public trailerId = this.videoIdService.trailerKey$;
  //Movie or Show Object to pass to the info component in the template
  public movieInfo = this.moviePreview.preview$;
  // All media images url 
  public movieImages = this.movieService.IMAGES;

  ngOnInit(): void {
    console.log();
  }

  public onClosePlayer(): void {
    this.videoIdService.removeTrailer();
  }

  public onClosePreview(): void {
    this.moviePreview.closePreview();
  }
}
