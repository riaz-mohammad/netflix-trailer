import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';


import { VideoIdService } from './../video-id.service';

@Component({
  selector: 'app-movie-trailer',
  templateUrl: './movie-trailer.component.html',
  styleUrls: ['./movie-trailer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieTrailerComponent implements OnInit {
  @Input() width!: number;
  @Input() height!: number;
  @Input() videoId!: string;
  @Output() closePlayer: EventEmitter<void> = new EventEmitter();
  constructor(public videoIdService: VideoIdService) { }
  public playerVars = {
    mute: 1,
    controls: 1,
    autoplay: 1,
  };
  
  public onClick(): void {
    this.closePlayer.emit();
  }

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  public onReady(event: YT.PlayerEvent): void {}

  public onStateChange(event: YT.OnStateChangeEvent): void {}
  
}
