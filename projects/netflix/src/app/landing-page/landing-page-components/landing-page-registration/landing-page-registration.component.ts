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
  @HostBinding('@registrationAnimation')
  public email!: FormControl;
  constructor() {}

  public get getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit(): void {
    this.email = new FormControl('', [Validators.required, Validators.email]);
  }
}
