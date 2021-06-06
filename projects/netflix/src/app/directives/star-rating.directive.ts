import { Subscription } from 'rxjs';
import { RatingServiceService } from './../services/rating-service.service';
import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appStarRating]'
})
export class StarRatingDirective implements OnInit {
  constructor(private ratingService: RatingServiceService) { }
  @Input() appStarRating!: number;
  @HostBinding('class.selected')
  get selected(): boolean {
    return this.ratingService.star(this.appStarRating);
  }
    

  
  @HostListener('click')
  onClick(): void {
    this.ratingService.toggleStar(this.appStarRating);
  }
  
  ngOnInit(): void {
    console.log()
  }
  
  
}
