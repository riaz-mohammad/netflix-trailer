import { LoginButtonClickService } from './../../login-button-click.service';
import { Component, OnInit, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { registrationAnimation } from '../../registration-animation';


@Component({
  selector: 'app-landing-page-registration',
  templateUrl: './landing-page-registration.component.html',
  styleUrls: ['./landing-page-registration.component.scss'],
  animations: [registrationAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPageRegistrationComponent implements OnInit {
  
  public email!: FormControl;
  constructor(private loginButtonClick: LoginButtonClickService) {}

  public get getErrorMessage() {
    // if (this.email.hasError('required')) {
    //   return 'Enter You Email Please!';
    // }
    if (this.email.touched) {
       return 'Enter Your Email Please'
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit(): void {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.loginButtonClick.clickEmitter$
      .subscribe(() => this.email.markAsTouched());
  }
}
