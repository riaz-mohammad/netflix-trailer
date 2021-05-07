
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { LandingPageModule } from './landing-page/landing-page.module';
import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LandingPageModule
  ],
    
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
