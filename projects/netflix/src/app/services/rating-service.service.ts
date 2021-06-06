import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
  
  
@Injectable({
  providedIn: 'root',
})
export class RatingServiceService {
  private ratingStars: Array<BehaviorSubject<boolean>> = [
    new BehaviorSubject<boolean>(false),
    new BehaviorSubject<boolean>(false),
    new BehaviorSubject<boolean>(false),
    new BehaviorSubject<boolean>(false),
    new BehaviorSubject<boolean>(false),
  ];
  
  public star(index: number): boolean {
    return this.ratingStars[index].value;
  }
    

  public toggleStar(index: number): void {
    
    let currentStarStatus = this.star(index);
    let previousStars = this.ratingStars.slice(0, index);
    this.ratingStars[index].next(!currentStarStatus);

    
        if (index > 0) {
        for (let prevStar of previousStars) {
          prevStar.next(!currentStarStatus);
          }
        }

    //I still need to fix the next Stars status if it exist and it's status is true
    this.ratingStars = [...this.ratingStars, ...previousStars];
  }
    
    
    

           
        
    
   
}
