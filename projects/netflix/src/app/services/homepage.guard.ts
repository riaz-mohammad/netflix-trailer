import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class HomepageGuard implements CanActivate {
  
  constructor(private router: Router, private user: UserService) {}
  
  canActivate(): boolean | UrlTree {
    return this.user.verifyUserInfo() ? true : this.router.createUrlTree(['']);
  }
  
}
