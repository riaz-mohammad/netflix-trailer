import { moveOutPreview } from '../../../animations/movie-preview-animation';

import { VideoIdService } from '../../../services/video-id.service';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, HostListener, HostBinding, QueryList, ViewContainerRef, ViewChildren } from '@angular/core';
import { Preview } from '../../../types/types';
import { moviePreviewAnimation } from '../../../animations/movie-preview-animation';
import { OnSelectDirective } from '../../../directives/on-select.directive';




@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss'],
  animations: [moviePreviewAnimation, moveOutPreview],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieInfoComponent implements OnInit, AfterViewInit {
  @HostBinding('@moveOutPreview')
  get runAnimation(): boolean {
    return true;
  }
  
  @Input() movieInfo!: Preview;
  @Input() imageUrl!: string;
  @Output() closeInfo: EventEmitter<void> = new EventEmitter();
  @ViewChildren(OnSelectDirective) onSelect!: QueryList<OnSelectDirective>;
  public get selected(): boolean[] {
    return this.onSelect?.map(selected => selected.select) ?? [false, false];
  }
  constructor(private movieTrailer: VideoIdService) {}
  
  ngOnInit(): void {
    console.log();
  }
    
    
    

  ngAfterViewInit(): void {
    console.log();
   
  }

  public playTheTrailer(): void {
    this.movieTrailer.findTrailer(this.movieInfo);
    this.closeInfo.emit();
  }

  public closePreview(event: MouseEvent): void {
    event.target !== event.currentTarget ? null : this.closeInfo.emit();
  }
}
