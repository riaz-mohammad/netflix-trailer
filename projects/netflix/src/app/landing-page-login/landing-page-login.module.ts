
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { ShareModule } from './../share/share.module';
import { LandingPageLoginComponent } from './landing-page-login-components/landing-page-login/landing-page-login.component';
import { LandingPageFormFieldsComponent } from './landing-page-login-components/landing-page-form-fields/landing-page-form-fields.component';
import { LandingPageLoginRoutingModule } from './landing-page-login-routing.module';
import { LoadingComponent } from './landing-page-login-components/loading/loading.component';




@NgModule({
  declarations: [
    LandingPageLoginComponent,
    LandingPageFormFieldsComponent,
    LoadingComponent,
  ],
  imports: [
    CommonModule,
    LandingPageLoginRoutingModule,
    ReactiveFormsModule,
    ShareModule
  ]
})
export class LandingPageLoginModule { }
