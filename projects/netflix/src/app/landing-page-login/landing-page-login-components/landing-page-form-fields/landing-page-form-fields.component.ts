import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { errorAnimation } from '../../../animations/form-error-animation';

@Component({
  selector: 'app-landing-page-form-fields',
  templateUrl: './landing-page-form-fields.component.html',
  styleUrls: ['./landing-page-form-fields.component.scss'],
  animations: [errorAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPageFormFieldsComponent implements OnInit {
  public formGroup!: FormGroup;
  constructor(private router: Router,
              private formBuilder: FormBuilder) { }
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
    this.router.navigate(['/home'])
    this.formGroup.reset({ name: '', country: '', password: '' });
  
    
  }

}
      
      
      
      
