import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageNavigationComponent } from './landing-page-navigation/landing-page-navigation.component';
import { LandingPageMainComponent } from './landing-page-main/landing-page-main.component';



@NgModule({
  declarations: [
    LandingPageNavigationComponent,
    LandingPageMainComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [LandingPageMainComponent]
})
export class LandingPageModule { }
