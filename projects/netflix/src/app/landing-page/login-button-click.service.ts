import { Injectable} from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginButtonClickService {
  private clickEmitter = new Subject<void>();
  public clickEmitter$ = this.clickEmitter.asObservable();
  public emitClickEvent(): void {
    this.clickEmitter.next();
  }
}
  
  
  
