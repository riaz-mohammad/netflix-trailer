
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { LandingPageLogoComponent } from './landing-page-logo/landing-page-logo.component';
import { LandingPageVideoBackgroundComponent } from './landing-page-video-background/landing-page-video-background.component';
import { LandingPageFormFieldComponent } from './landing-page-form-field/landing-page-form-field.component';



@NgModule({
  declarations: [
    LandingPageVideoBackgroundComponent,
    LandingPageLogoComponent,
    LandingPageFormFieldComponent

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    LandingPageVideoBackgroundComponent,
    LandingPageLogoComponent,
    LandingPageFormFieldComponent
  ]
})
export class ShareModule { }
