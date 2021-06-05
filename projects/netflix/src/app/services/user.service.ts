import { User } from './../types/types';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private storage = localStorage;
  private EMAIL = 'EMAIL';
  private USER = 'USER';
  constructor(private router: Router) {}
  public storeUserEmail(email: string): void {
    this.storage.setItem(this.EMAIL, JSON.stringify(email));
  }

  public storeUserInfo(user: User): void {
    this.storage.setItem(this.USER, JSON.stringify(user));
  }

  public verifyUserEmail(): boolean {
    return this.storage.getItem(this.EMAIL) ? true : false;
  }

  public verifyUserInfo(): boolean {
    return this.storage.getItem(this.USER) ? true : false;
  }

  public logoutUser(): void {
    this.storage.removeItem(this.EMAIL);
    this.storage.removeItem(this.USER);
    this.router.navigate([''])
  }

  
}
