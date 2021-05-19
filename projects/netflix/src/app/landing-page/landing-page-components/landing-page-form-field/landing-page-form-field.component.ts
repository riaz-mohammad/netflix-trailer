import { Component, OnInit, ChangeDetectionStrategy, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { map } from 'rxjs/operators';

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
export class LandingPageFormFieldComponent implements OnInit, ControlValueAccessor{
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
    this.formControl = new FormControl();
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
    this.formControl.value ? null : (
      this.moveUp = false
    )
  }
  public onFocus(): void {
    this.moveUp = true;

  }
  public onValueChange(): void {
    this.valueChanged(this.formControl.value);
  }

    
  ngOnInit(): void {
    console.log();
  }
    
}
