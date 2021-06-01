import { Directive, HostBinding, HostListener, OnDestroy, OnInit } from '@angular/core';
import { LikeAndDislikeToggleService } from '../services/like-and-dislike-toggle.service';



@Directive({
  selector: '[appOnlike]',
})
export class OnlikeDirective implements OnInit, OnDestroy {
  private _toggleState!: boolean;
  constructor(private likeAndDislikeService: LikeAndDislikeToggleService) {}
  
  @HostBinding('class.selected')
  private get selfState(): boolean {
    return this._toggleState;
  }
  @HostListener('click')
  onClick(): void {
    this.toggle();
  }


  public toggle(): void {
    this.likeAndDislikeService.toggleLikeState();
  }

  

  
  ngOnInit(): void {
    this.likeAndDislikeService.likeState$
      .subscribe((value: boolean) => this._toggleState = value);
  }

  ngOnDestroy(): void {
    console.log();
  }
}
