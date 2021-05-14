import { Component, OnInit, ChangeDetectionStrategy, HostBinding, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { registrationAnimation } from '../../registration-animation';
import { map, tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { LoginButtonClickService } from './../../login-button-click.service';

@Component({
  selector: 'app-landing-page-registration',
  templateUrl: './landing-page-registration.component.html',
  styleUrls: ['./landing-page-registration.component.scss'],
  animations: [registrationAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPageRegistrationComponent implements OnInit, OnDestroy {
  public sub!: Subscription;
  public email!: FormControl;
  constructor(private loginButtonClick: LoginButtonClickService) {}

  public get getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Enter You Email Please!';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  public onSubmit(): void {
    console.log(this.email.value);
  };
  ngOnInit(): void {
    // this.email = new FormControl('', [Validators.required, Validators.email]);
    this.email = new FormControl('', {
      validators: [Validators.required, Validators.email],
      updateOn: 'change',
    });

    this.sub = this.loginButtonClick.clickEmitter$
      .pipe(
        tap(() => {
          this.email.setValue('');
          this.email.markAsTouched();
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
