
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';



import { ShareModule } from './../share/share.module';
import { FormWrapperComponent } from
  './landing-page-components/form-wrapper/form-wrapper.component';
import { LandingPageMainGridComponent } from
  './landing-page-components/landing-page-main-grid/landing-page-main-grid.component';

import { LandingPageRegistrationComponent } from
  './landing-page-components/landing-page-registration/landing-page-registration.component';
import { LandingPageVideoDemoComponent } from
  './landing-page-components/landing-page-video-demo/landing-page-video-demo.component';

import { NavigationPageFooterComponent } from
  './landing-page-components/navigation-page-footer/navigation-page-footer.component';



@NgModule({
  declarations: [
    LandingPageMainGridComponent,
    LandingPageRegistrationComponent,
    LandingPageVideoDemoComponent,
    NavigationPageFooterComponent,
    FormWrapperComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ShareModule
  ],
  exports: [],
})
export class LandingPageModule {}


