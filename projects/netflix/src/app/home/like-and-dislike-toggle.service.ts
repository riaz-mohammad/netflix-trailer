
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LikeAndDislikeToggleService {
  //It took me 14 hours to implement correctly the toggle functionality of like and dislike buttons
  private likeState!: boolean;
  private dislikeState!: boolean;
  private _likeState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.likeState);
  private _dislikeState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.dislikeState);
  public likeState$ = this._likeState.asObservable();
  public dislikeState$ = this._dislikeState.asObservable();

  public toggleLikeState(): void {
    if (this.dislikeState && !this.likeState) {
      this.likeState = true;
      this._likeState.next(this.likeState);
      this.dislikeState = !this.likeState;
      this._dislikeState.next(this.dislikeState);
    } else {
        this.likeState = !this.likeState;
        this._likeState.next(this.likeState);
    }
  }

    
  
  public toggleDislikeState(): void {
    if (this.likeState && !this.dislikeState) {
      this.dislikeState = true;
      this._dislikeState.next(this.dislikeState);
      this.likeState = !this.dislikeState;
      this._likeState.next(this.likeState);
    } else {
        this.dislikeState = !this.dislikeState;
        this._dislikeState.next(this.dislikeState);
      }

      
      
  }

    



    
}

    
  
  

  
