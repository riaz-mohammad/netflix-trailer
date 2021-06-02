import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ShareModule } from './share/share.module';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageModule } from './landing-page/landing-page.module';
import { AppComponent } from './app.component';
import { HomeCollectionButtonComponent } from
  './home-collection-button/home-collection-button.component';
import { ActivateRouteDirective } from './directives/activate-route.directive';
import { CollectionButtonComponent } from './collection-button/collection-button.component';
import { LogoutModalComponent } from './logout-modal/logout-modal.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeCollectionButtonComponent,
    ActivateRouteDirective,
    CollectionButtonComponent,
    LogoutModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LandingPageModule,
    ShareModule
    
  ],
    
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
    

    
