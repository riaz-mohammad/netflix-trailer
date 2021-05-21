import { ShareModule } from './../share/share.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


import { LandingPageMainGridComponent } from './landing-page-components/landing-page-main-grid/landing-page-main-grid.component';
import { LandingPageNavigationComponent } from './landing-page-components/landing-page-navigation/landing-page-navigation.component';
import { LandingPageLoginButtonComponent } from '../share/landing-page-login-button/landing-page-login-button.component';
import { LandingPageRegistrationComponent } from './landing-page-components/landing-page-registration/landing-page-registration.component';
import { LandingPageVideoDemoComponent } from './landing-page-components/landing-page-video-demo/landing-page-video-demo.component';
import { ObserveAndAnimateDirective } from './observe-and-animate.directive';
import { NavigationPageFooterComponent } from './landing-page-components/navigation-page-footer/navigation-page-footer.component';


@NgModule({
  declarations: [
    LandingPageMainGridComponent,
    LandingPageNavigationComponent,
    LandingPageLoginButtonComponent,
    LandingPageRegistrationComponent,
    LandingPageVideoDemoComponent,
    NavigationPageFooterComponent,
    ObserveAndAnimateDirective,
  ],
    
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    ShareModule
  ],
  exports: [],
})
export class LandingPageModule {}


