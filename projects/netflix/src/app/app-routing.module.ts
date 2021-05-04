import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageMainComponent } from './landing-page/landing-page-main/landing-page-main.component';


const routes: Routes = [
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
