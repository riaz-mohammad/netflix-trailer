import { Component } from '@angular/core';
import { OutletContext, Router, RouterOutlet } from '@angular/router';
import { routeAnimations } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations],
})
export class AppComponent {
  title = 'netflix';
  constructor(public router: Router) {}
  get textToShow(): string {
    return this.router.url === '/home' ? 'LOG OUT' : 'LOG IN';
  }

  public getRouteState(outlet: RouterOutlet): string {
    return (outlet && outlet.activatedRouteData &&
           outlet.activatedRouteData.animation);
  }
    
    
    
}
