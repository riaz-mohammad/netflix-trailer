import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { invalidEmail } from '../../../animations/email-invalid-animation';
import { LoginButtonClickService } from '../../../services/login-button-click.service';
import { UserService } from './../../../services/user.service';



@Component({
  selector: 'app-form-wrapper',
  templateUrl: './form-wrapper.component.html',
  styleUrls: ['./form-wrapper.component.scss'],
  animations: [invalidEmail],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormWrapperComponent implements OnInit{
  public formGroup!: FormGroup;
  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private userInfo: UserService,
              public buttonClick: LoginButtonClickService) { }
  
  ngOnInit(): void {
       this.formGroup = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]]
            }, { updateOn: 'blur' });
  }
    
  public get email(): FormControl {
    return this.formGroup.get('email') as FormControl;
  } 

  public onSubmit(input: any): void {
    if (this.email.invalid) {
      input.focusOnInput()
      return;
    }
      this.userInfo.storeUserEmail(this.email.value);
      this.router.navigate(['/login'])
  }
    
      

      

}
