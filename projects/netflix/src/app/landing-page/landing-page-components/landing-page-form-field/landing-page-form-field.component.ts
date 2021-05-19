import { Component, OnInit, ChangeDetectionStrategy, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-landing-page-form-field',
  templateUrl: './landing-page-form-field.component.html',
  styleUrls: ['./landing-page-form-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LandingPageFormFieldComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPageFormFieldComponent implements ControlValueAccessor {
  public formControl!: FormControl;
  @Input() type: unknown;
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('placeholder') label!: string;
  @Input() borderColor: string | undefined;
  @Input() borderColorFocus: string | undefined;
  public moveUp: boolean | undefined;
  public inputValue!: unknown;
  public valueChanged!: (val: string) => void;
  public touched!: () => void;
  constructor() {
    this.formControl = new FormControl('', Validators.required);
  }

  writeValue(value: unknown): void {
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

  public onFocus(): void {
    this.moveUp = true;
  }
  public onValueChange(): void {
    this.valueChanged(this.formControl.value);
  }

  public get invalid(): boolean {
    return this.formControl.dirty && this.formControl.invalid ? true : false;
 }   
  
}
