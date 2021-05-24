
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageMainGridComponent } from './landing-page/landing-page-components/landing-page-main-grid/landing-page-main-grid.component';




const routes: Routes = [
  {
    path: '',
    component: LandingPageMainGridComponent,
  },

  {
    path: 'login',
    loadChildren: () =>
      import('./landing-page-login/landing-page-login.module').then(
        (loginModule) => loginModule.LandingPageLoginModule
      ),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: '',
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
