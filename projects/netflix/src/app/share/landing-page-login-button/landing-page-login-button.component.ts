import { Component, ChangeDetectionStrategy, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginButtonClickService } from '../../services/login-button-click.service';



@Component({
  selector: 'app-landing-page-login-button',
  templateUrl: './landing-page-login-button.component.html',
  styleUrls: ['./landing-page-login-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageLoginButtonComponent{
  @Output() public showModal: EventEmitter<void> = new EventEmitter();
  constructor(
    private router: Router,
    private loginButtonClickEmitter: LoginButtonClickService) { }
  public clickHandler(): void {
    if (this.router.url === '/') {
      this.loginButtonClickEmitter.emitClickEvent();
      return;
    }  
    
    this.showModal.emit();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
    
  }
  

}
