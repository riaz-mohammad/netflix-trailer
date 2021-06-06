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
import { MovieInfoComponent } from './home/home-page-components/movie-info/movie-info.component';
import { MovieTrailerComponent } from './home/home-page-components/movie-trailer/movie-trailer.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { OnlikeDirective } from './directives/onlike.directive';
import { StarRatingDirective } from './directives/star-rating.directive';
import { OndislikeDirective } from './directives/ondislike.directive';






@NgModule({
  declarations: [
    AppComponent,
    HomeCollectionButtonComponent,
    ActivateRouteDirective,
    MovieTrailerComponent,
    MovieInfoComponent,
    CollectionButtonComponent,
    LogoutModalComponent,
    OnlikeDirective,
    OndislikeDirective,
    StarRatingDirective,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    YouTubePlayerModule,
    AppRoutingModule,
    LandingPageModule,
    ShareModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
    

    
