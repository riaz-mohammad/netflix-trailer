import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoIdService {
  private sourceIds = new Subject<string>();
  public  id$ = this.sourceIds.asObservable();
  constructor() {}

  public videoId(id: string): void {
    id ? (this.sourceIds.next(id)) : null;
  }
 
  //explicitly remove the id which will cause the player to close
  public removeVideoId(): void {
    this.sourceIds.next(undefined)
  }
    
}
