import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { LandingPageNavigationComponent } from './landing-page-navigation/landing-page-navigation.component';
import { LandingPageMainComponent } from './landing-page-main/landing-page-main.component';
import { LandingPageRegistrationComponent } from './landing-page-registration/landing-page-registration.component';







@NgModule({
  declarations: [
    LandingPageNavigationComponent,
    LandingPageMainComponent,
    LandingPageRegistrationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule

  ],

  exports: [LandingPageMainComponent]
})
export class LandingPageModule { }
