import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivateRoute } from '../types/types';


@Directive({
  selector: '[appActivateRoute]',
})
export class ActivateRouteDirective {
  @Input() appActivateRoute!: ActivateRoute;
  constructor(private router: Router) {}
  
  @HostBinding('@buttonsAnimation')
  get runAnimation(): boolean {
    return true;
  }

  @HostListener('click')
  onClick(): void {
    this.router.navigate([`/${this.appActivateRoute}`]);
  }
}
