import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { VideoIdService } from './video-id.service';
import { MoviePreviewService } from './movie-preview.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  constructor(public videoIdService: VideoIdService,
              public moviePreview: MoviePreviewService) {}
  
  public trailerId = this.videoIdService.id$;
  public movieInfo = this.moviePreview.preview$;
  ngOnInit(): void {
    console.log();
  }

  public onClosePlayer(): void {
    this.videoIdService.removeVideoId();
  }
  

}
