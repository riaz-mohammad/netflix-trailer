import { ReactiveFormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { ShareModule } from './../share/share.module';


import { FormWrapperComponent } from './landing-page-components/form-wrapper/form-wrapper.component';
import { LandingPageMainGridComponent } from './landing-page-components/landing-page-main-grid/landing-page-main-grid.component';
import { LandingPageNavigationComponent } from './landing-page-components/landing-page-navigation/landing-page-navigation.component';
import { LandingPageRegistrationComponent } from './landing-page-components/landing-page-registration/landing-page-registration.component';
import { LandingPageVideoDemoComponent } from './landing-page-components/landing-page-video-demo/landing-page-video-demo.component';

import { NavigationPageFooterComponent } from './landing-page-components/navigation-page-footer/navigation-page-footer.component';



@NgModule({
  declarations: [
    LandingPageMainGridComponent,
    // LandingPageNavigationComponent,
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


