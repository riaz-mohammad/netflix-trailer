
import { VideoIdService } from './../video-id.service';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { Preview } from './../types';
import { moviePreviewAnimation } from '../movie-preview-animation';


@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss'],
  animations: [moviePreviewAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieInfoComponent implements OnInit {
  @Input() movieInfo!: Preview;
  @Input() imageUrl!: string;
  @Output() closeInfo: EventEmitter<void> = new EventEmitter();
  
  constructor(private movieTrailer: VideoIdService) {}
  
  ngOnInit(): void {
    console.log();
  }

  public playTheTrailer(): void {
    this.movieTrailer.findTrailer(this.movieInfo);
    this.closeInfo.emit();
  }
  

  public closePreview(event: MouseEvent): void {
    event.target !== event.currentTarget
      ? null
      : (this.closeInfo.emit());
  }

}
