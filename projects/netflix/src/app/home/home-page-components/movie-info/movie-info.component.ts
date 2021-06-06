
import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter,  HostBinding } from '@angular/core';
import { Preview } from '../../../types/types';
import {buttonAnimation, moveOutPreview, moviePreviewAnimation, titleAnimation } from '../../../animations/movie-preview-animation';
import { VideoIdService } from '../../../services/video-id.service';





@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss'],
  animations: [
    moviePreviewAnimation,
    moveOutPreview,
    titleAnimation,
    buttonAnimation,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieInfoComponent {
  @HostBinding('@moveOutPreview')
  get runAnimation(): boolean {
    return true;
  }

  @Input() movieInfo!: Preview;
  @Input() imageUrl!: string;
  @Output() closeInfo: EventEmitter<void> = new EventEmitter();
  
  
  constructor(private movieTrailer: VideoIdService) {}


  public playTheTrailer(): void {
    this.movieTrailer.findTrailer(this.movieInfo);
    this.closeInfo.emit();
  }

  public closePreview(event: MouseEvent): void {
    event.target !== event.currentTarget ? null : this.closeInfo.emit();
  }
}
