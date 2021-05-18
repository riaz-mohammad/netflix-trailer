import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-landing-page-login',
  templateUrl: './landing-page-login.component.html',
  styleUrls: ['./landing-page-login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPageLoginComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  public formGroup!: FormGroup;

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group(
      {
        name: ['', Validators.required],
        password: ['', Validators.required],
      },
      { updateOn: 'blur' }
    );
  }

  public login(): void {
    if (this.formGroup.invalid) {
      this.name.setValue('');
      this.name.markAsDirty();
    }
  }

  public get invalidName(): boolean {
    return this.name.dirty && this.name.invalid ? true : false;
  }

  private get name(): FormControl {
    return this.formGroup.get('name') as FormControl;
  }
}
