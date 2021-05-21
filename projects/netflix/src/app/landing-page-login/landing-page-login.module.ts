import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from './../share/share.module';

import { LandingPageFormButtonComponent } from './landing-page-login-components/landing-page-form-button/landing-page-form-button.component';
import { LandingPageFormFieldsComponent } from './landing-page-login-components/landing-page-form-fields/landing-page-form-fields.component';
import { LandingPageFormWrapperComponent } from './landing-page-login-components/landing-page-form-wrapper/landing-page-form-wrapper.component';
import { LandingPageLoginComponent } from './../landing-page/landing-page-components/landing-page-login/landing-page-login.component';

import { LandingPageLoginRoutingModule } from './landing-page-login-routing.module';


@NgModule({
  declarations: [
    LandingPageLoginComponent,
    LandingPageFormWrapperComponent,
    LandingPageFormFieldsComponent,
    LandingPageFormButtonComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LandingPageLoginRoutingModule,
    ShareModule
  ]
})
export class LandingPageLoginModule { }
