import { UserService } from './../../../services/user.service';
import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { errorAnimation } from '../../../animations/form-error-animation';
import { loginButtonAnimation } from './../../../animations/login-button-animation';
export const TOKEN = 'TOKEN';
@Component({
  selector: 'app-landing-page-form-fields',
  templateUrl: './landing-page-form-fields.component.html',
  styleUrls: ['./landing-page-form-fields.component.scss'],
  animations: [errorAnimation, loginButtonAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPageFormFieldsComponent implements OnInit {
  @Output() showLoading: EventEmitter<boolean> = new EventEmitter();
  public formGroup!: FormGroup;
  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private user: UserService) { }
  public notValid: boolean | undefined;
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group(
      {
        name: ['', Validators.required],
        country: ['', Validators.required],
        password: ['', Validators.required],
      },
      { updateOn: 'change' }
    );
  }

  public onSubmit(): void {
    if (this.formGroup.invalid) {
      this.notValid = true;
      return;
    }

    this.notValid = false;
    this.showLoading.emit(true);
    this.user.storeUserInfo(this.formGroup.value);
    this.formGroup.reset({ name: '', country: '', password: '' });

  }
  
  
}
      
      
      
      
