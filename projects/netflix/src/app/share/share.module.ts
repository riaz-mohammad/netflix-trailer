import { LandingPageNavigationComponent } from './../landing-page/landing-page-components/landing-page-navigation/landing-page-navigation.component';
import { ObserveAndAnimateDirective } from '../directives/observe-and-animate.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LandingPageFormWrapperComponent } from './../landing-page-login/landing-page-login-components/landing-page-form-wrapper/landing-page-form-wrapper.component';
import { LandingPageLogoComponent } from './landing-page-logo/landing-page-logo.component';
import { LandingPageVideoBackgroundComponent } from './landing-page-video-background/landing-page-video-background.component';
import { LandingPageFormFieldComponent } from './landing-page-form-field/landing-page-form-field.component';
import { LandingPageFormButtonComponent } from './landing-page-form-button/landing-page-form-button.component';
import { LandingPageLoginButtonComponent } from './landing-page-login-button/landing-page-login-button.component';



@NgModule({
  declarations: [
    ObserveAndAnimateDirective,
    LandingPageVideoBackgroundComponent,
    LandingPageLogoComponent,
    LandingPageFormFieldComponent,
    LandingPageFormButtonComponent,
    LandingPageLoginButtonComponent,
    LandingPageFormWrapperComponent,
    LandingPageNavigationComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    
  ],
  exports: [
    LandingPageNavigationComponent,
    LandingPageVideoBackgroundComponent,
    LandingPageLogoComponent,
    LandingPageFormFieldComponent,
    LandingPageFormButtonComponent,
    LandingPageLoginButtonComponent,
    LandingPageFormWrapperComponent,
    ObserveAndAnimateDirective
  ]
})

export class ShareModule {}