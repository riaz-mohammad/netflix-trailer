import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { LandingPageVideoDemoComponent } from './landing-page-components/landing-page-video-demo/landing-page-video-demo.component';
import { ObserveAndAnimateDirective } from './observe-and-animate.directive';

@NgModule({
  declarations: [
    LandingPageMainGridComponent,
    LandingPageNavigationComponent,
    LandingPageLogoComponent,
    LandingPageLoginButtonComponent,
    LandingPageVideoBackgroundComponent,
    LandingPageRegistrationComponent,
    LandingPageVideoDemoComponent,
    ObserveAndAnimateDirective,
  ],
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, BrowserAnimationsModule],
  exports: [LandingPageMainGridComponent],
})
export class LandingPageModule {}


