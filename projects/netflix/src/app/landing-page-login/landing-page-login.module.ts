import { LandingPageFormButtonComponent } from './../landing-page/landing-page-components/landing-page-form-button/landing-page-form-button.component';
import { LandingPageFormFieldComponent } from './../landing-page/landing-page-components/landing-page-form-field/landing-page-form-field.component';
import { LandingPageFormFieldsComponent } from './../landing-page/landing-page-components/landing-page-form-fields/landing-page-form-fields.component';
import { LandingPageFormWrapperComponent } from './../landing-page/landing-page-components/landing-page-form-wrapper/landing-page-form-wrapper.component';
import { LandingPageLoginComponent } from './../landing-page/landing-page-components/landing-page-login/landing-page-login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    LandingPageLoginComponent,
    LandingPageFormWrapperComponent,
    LandingPageFormFieldsComponent,
    LandingPageFormFieldComponent,
    LandingPageFormButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LandingPageLoginModule { }
