import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-wrapper',
  templateUrl: './form-wrapper.component.html',
  styleUrls: ['./form-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormWrapperComponent implements OnInit {
  public formGroup!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
           
    this.formGroup = this.formBuilder.group({
        email: [ '', [Validators.required, Validators.email]]
      })
    
    
  }

  public onSubmit(): void {
    
  }

}
