import { LoginButtonClickService } from './../../login-button-click.service';
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
  }
  

}
