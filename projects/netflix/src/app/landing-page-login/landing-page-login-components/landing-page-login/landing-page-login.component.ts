import { Component,  ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { timer, Subscription, Subject } from 'rxjs';
import { take } from 'rxjs/operators';



@Component({
  selector: 'app-landing-page-login',
  templateUrl: './landing-page-login.component.html',
  styleUrls: ['./landing-page-login.component.scss'],
  animations: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPageLoginComponent {
  public showLoading: Subject<boolean> = new Subject();
  private sub!: Subscription;
  constructor(private router: Router) { }

  public loading(): void {
    this.showLoading.next(true);
    this.sub = timer(5000).pipe(
      take(1)
    ).subscribe(_ => (
      this.router.navigate(['/home']),
      this.sub.unsubscribe()
    ));
  }
    
    
    
}
  


