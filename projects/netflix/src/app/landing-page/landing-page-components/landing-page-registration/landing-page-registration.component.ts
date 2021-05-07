import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-landing-page-registration',
  templateUrl: './landing-page-registration.component.html',
  styleUrls: ['./landing-page-registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPageRegistrationComponent implements OnInit {
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
