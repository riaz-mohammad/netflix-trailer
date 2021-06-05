import { Injectable } from '@angular/core';
import {CanActivate, Router, UrlTree } from '@angular/router';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class LoginAuthenticateGuard implements CanActivate {
  constructor(private user: UserService, private router: Router) {}
  canActivate(): boolean | UrlTree {
    return this.user.verifyUserEmail() ? true : this.router.createUrlTree(['']);
  }
  
}
