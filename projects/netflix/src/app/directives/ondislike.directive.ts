import { LikeAndDislikeToggleService } from '../services/like-and-dislike-toggle.service';
import { Directive, HostBinding, HostListener, OnDestroy, OnInit } from '@angular/core';


@Directive({
  selector: '[appOndislike]'
})
export class OndislikeDirective implements OnInit, OnDestroy{
  private _toggleState!: boolean;
  constructor(private likeAndDislikeService: LikeAndDislikeToggleService){}
  
  
  @HostBinding('class.selected')
  private get selfState(): boolean {
    return this._toggleState;
  }
  
  @HostListener('click')
  onClick(): void {
    this.toggle();
  }
    
  public toggle(): void {
    this.likeAndDislikeService.toggleDislikeState();
  }
   
  ngOnInit(): void {
    this.likeAndDislikeService.dislikeState$
      .subscribe((value: boolean) => this._toggleState = value);
  }
  ngOnDestroy(): void {
    console.log();
  }
  
}
