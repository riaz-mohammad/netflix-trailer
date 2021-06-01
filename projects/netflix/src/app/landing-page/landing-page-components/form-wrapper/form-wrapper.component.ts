import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { invalidEmail } from '../../email-invalid-animation';
import { LoginButtonClickService } from './../../login-button-click.service';



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
      this.router.navigate(['/login'])
    
  }
      

      

}
