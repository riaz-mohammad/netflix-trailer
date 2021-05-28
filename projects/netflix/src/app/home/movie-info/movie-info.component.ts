import { VideoIdService } from './../video-id.service';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Preview, MovieTrailer } from './../types';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieInfoComponent implements OnInit {
  @Input() movieInfo!: Preview;
  @Input() ImageUrl!: string;
  @Output() closeInfo: EventEmitter<void> = new EventEmitter();
  constructor(private movieTrailer:VideoIdService) { }

  ngOnInit(): void {
    console.log()
  }

  public onClick(): void {
    this.closeInfo.emit();
  }

  public playTheTrailer(): void {
    
  }

}
