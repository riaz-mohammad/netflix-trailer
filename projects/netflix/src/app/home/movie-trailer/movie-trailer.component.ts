import { TrailerKey } from './../types';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';


import { VideoIdService } from './../video-id.service';
import {trailerAnimation } from '../trailer-animation';

@Component({
  selector: 'app-movie-trailer',
  templateUrl: './movie-trailer.component.html',
  styleUrls: ['./movie-trailer.component.scss'],
  animations: [trailerAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieTrailerComponent implements OnInit {
  @Input() width!: number;
  @Input() height!: number;
  @Input() videoId!: TrailerKey;
  @Output() closePlayer: EventEmitter<void> = new EventEmitter();
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
    console.log('Clicked');
  }

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
    console.log(this.videoId);
  }

  public onReady(event: YT.PlayerEvent): void {}

  public onStateChange(event: YT.OnStateChangeEvent): void {}
}
