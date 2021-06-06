import { Injectable } from '@angular/core';
import { Subject, timer, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MediaNotFoundService {
  private sub!: Subscription;
  private errorSource: Subject<boolean> = new Subject();
  public error$ = this.errorSource.asObservable();
  
  
  public mediaNotFound(): void {
    this.errorSource.next(true);
    this.sub = timer(3000).pipe(
      take(1)
    ).subscribe(_ => (
      this.errorSource.next(false),
      this.sub.unsubscribe()
    ))
  }


}
