import { Component, OnInit, ChangeDetectionStrategy, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, Validators, FormGroupDirective } from '@angular/forms';


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
export class LandingPageFormFieldComponent implements ControlValueAccessor, OnInit {
  
  @Input() type!: string;
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('placeholder') label!: string;
  @Input() borderColor: string | undefined;
  @Input() borderColorFocus: string | undefined;
  public moveUp: boolean | undefined;
  public initialValue!: string;
  public userTypedValue: string | undefined;
  public valueChanged!: (val: string) => void;
  public touched!: () => void;
  constructor(private formGroup: FormGroupDirective) {}

  writeValue(value: string): void {
    this.initialValue = value;
  }
  registerOnChange(fn: any): void {
    this.valueChanged = fn;
  }
  registerOnTouched(fn: any): void {
    this.touched = fn;
  }

  public onTouched(): void {
    (this.userTypedValue) ?
          this.touched() :
          (this.moveUp = false);
  }
    
    
  public get validity(): boolean {
    let control = this.formGroup.control
      .get(this.label.toLowerCase()) as FormControl;
    return (control.dirty && control.invalid) ? true : false;
    // return (this.formGroup.touched && this.formGroup.invalid) ? true : false;
  }
    
    

  public onFocus(): void {
    this.moveUp = true;
  }
    
  public onValueChange(event: Event): void {
    this.userTypedValue = (<HTMLInputElement>event.target).value;
    this.valueChanged(this.userTypedValue);
  }
    
  
  ngOnInit(): void {
    console.log();
  }
}
