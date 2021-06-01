import { LoginButtonClickService } from './../../landing-page/login-button-click.service';
import { Component, ChangeDetectionStrategy, forwardRef, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, Validators, FormGroup, FormGroupDirective } from '@angular/forms';

import { errorMessageAnimation } from './error-message-animation';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-landing-page-form-field',
  templateUrl: './landing-page-form-field.component.html',
  styleUrls: ['./landing-page-form-field.component.scss'],
  animations: [errorMessageAnimation],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LandingPageFormFieldComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPageFormFieldComponent implements ControlValueAccessor, OnInit {
  public formControl!: FormControl;
  @Input() type!: string;
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('placeholder') label!: string;
  @Input() borderColor: string | undefined;
  @Input() borderColorFocus: string | undefined;
  @ViewChild('input', {static: true}) input!: ElementRef<HTMLInputElement>
  public moveUp: boolean | undefined;
  public valueChanged!: (val: string) => void;
  public touched!: () => void;
  constructor() {
    this.formControl = new FormControl('', Validators.required);
  }

  ngOnInit(): void {
    console.log();
  }
    
    
  public focusOnInput(): void {
    this.input.nativeElement.focus();
  }

    
    
    

  writeValue(value: string): void {
    this.formControl.setValue(value);
  }
  registerOnChange(fn: any): void {
    this.valueChanged = fn;
  }
  registerOnTouched(fn: any): void {
    this.touched = fn;
  }

  public onTouched(): void {
    if (!this.formControl.value) {
      this.moveUp = false;
    }
    this.touched();
  }

  public get validity(): boolean {
    return this.formControl.dirty && this.formControl.invalid ? true : false;
  }

  public onFocus(): void {
    this.moveUp = true;
  }

  public onValueChange(): void {
    this.valueChanged(this.formControl.value);
  }
}
