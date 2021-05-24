import { LoginButtonClickService } from '../../landing-page/login-button-click.service';
import { Component, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-landing-page-login-button',
  templateUrl: './landing-page-login-button.component.html',
  styleUrls: ['./landing-page-login-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageLoginButtonComponent{
  constructor(private loginButtonClickEmitter: LoginButtonClickService) { }
  public clickHandler(): void {
    this.loginButtonClickEmitter.emitClickEvent();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
    
  }
  

}
