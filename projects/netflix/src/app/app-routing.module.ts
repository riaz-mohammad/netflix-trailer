

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageMainGridComponent } from './landing-page/landing-page-components/landing-page-main-grid/landing-page-main-grid.component';
import { LandingPageLoginComponent } from './landing-page/landing-page-components/landing-page-login/landing-page-login.component';




const routes: Routes = [
  {
    path: '', component: LandingPageMainGridComponent
  },

  {
    path: 'login', component: LandingPageLoginComponent
  },
  {
    path: '', pathMatch: 'full', redirectTo: ''
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
