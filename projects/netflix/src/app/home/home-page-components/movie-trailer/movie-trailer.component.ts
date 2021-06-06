import { fadeIn } from '../../../animations/trailer-animation';
import { TrailerKey } from '../../../types/types';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';


import { VideoIdService } from '../../../services/video-id.service';
import {trailerAnimation } from '../../../animations/trailer-animation';

@Component({
  selector: 'app-movie-trailer',
  templateUrl: './movie-trailer.component.html',
  styleUrls: ['./movie-trailer.component.scss'],
  animations: [trailerAnimation, fadeIn],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieTrailerComponent implements OnInit {
  @Input() videoId!: TrailerKey;
  @Output() closePlayer: EventEmitter<void> = new EventEmitter();
  @HostBinding('@fadeIn')
  get runAnimation(): boolean {
    return true;
  };
  
  @HostListener('click', ['$event'])
  _onclick(): void {
    this.closePlayer.emit();
    }
  constructor(public videoIdService: VideoIdService) {}
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
