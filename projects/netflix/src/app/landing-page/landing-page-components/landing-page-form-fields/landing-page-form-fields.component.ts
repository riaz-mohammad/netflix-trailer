import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-landing-page-form-fields',
  templateUrl: './landing-page-form-fields.component.html',
  styleUrls: ['./landing-page-form-fields.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPageFormFieldsComponent implements OnInit {
  public formGroup!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      country: ['', Validators.required],
      password: ['', Validators.required]
    }, {updateOn: 'change' });
    
    
  }
      
      

    

  public onSubmit(): void {
    console.log(this.formGroup.value);
  }
}
