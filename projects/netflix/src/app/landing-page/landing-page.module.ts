
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { LandingPageMainGridComponent } from './landing-page-components/landing-page-main-grid/landing-page-main-grid.component';
import { LandingPageNavigationComponent } from './landing-page-components/landing-page-navigation/landing-page-navigation.component';
import { LandingPageLogoComponent } from './landing-page-components/landing-page-logo/landing-page-logo.component';
import { LandingPageLoginButtonComponent } from './landing-page-components/landing-page-login-button/landing-page-login-button.component';
import { LandingPageVideoBackgroundComponent } from './landing-page-components/landing-page-video-background/landing-page-video-background.component';
import { LandingPageRegistrationComponent } from './landing-page-components/landing-page-registration/landing-page-registration.component';

@NgModule({
  declarations: [
    LandingPageMainGridComponent,
    LandingPageNavigationComponent,
    LandingPageLogoComponent,
    LandingPageLoginButtonComponent,
    LandingPageVideoBackgroundComponent,
    LandingPageRegistrationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  exports: [LandingPageMainGridComponent]
})
export class LandingPageModule { }


