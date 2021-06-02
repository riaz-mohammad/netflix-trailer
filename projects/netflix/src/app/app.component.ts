import { Component } from '@angular/core';
import {  Router, RouterOutlet } from '@angular/router';
import { modalFadeIn } from './animations/modal-animation';
import { routeAnimations } from './animations/route-animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations, modalFadeIn],
})
export class AppComponent {
  title = 'netflix';
  public showModal!: boolean;
  constructor(public router: Router) {}
  get textToShow(): string {
    return this.router.url === '/' ? 'LOG IN' : 'LOG OUT';
  }

  public getRouteState(outlet: RouterOutlet): string {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }

  public get showOrHide(): boolean {
    return !(this.router.url === '/' || this.router.url == '/login');
  }

  public onShowModal(value: boolean): void {
    this.showModal = !this.showModal;
    value ? this.router.navigate(['/']) : null;
  }
}
