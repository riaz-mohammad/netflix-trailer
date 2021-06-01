import { LoginButtonClickService } from '../../landing-page/login-button-click.service';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing-page-login-button',
  templateUrl: './landing-page-login-button.component.html',
  styleUrls: ['./landing-page-login-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageLoginButtonComponent{
  
  constructor(
    private router: Router,
    private loginButtonClickEmitter: LoginButtonClickService) { }
  public clickHandler(): void {
    if (this.router.url === '/') {
      this.loginButtonClickEmitter.emitClickEvent();
      return;
    }

  this.router.navigate(['/'])
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
    
  }
  

}
