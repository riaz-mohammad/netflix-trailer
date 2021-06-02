
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageMainGridComponent } from './landing-page/landing-page-components/landing-page-main-grid/landing-page-main-grid.component';




const routes: Routes = [
  {
    path: '',
    component: LandingPageMainGridComponent,
    data: {animation: 'landingPage'}
  },

  {
    path: 'login',
    loadChildren: () =>import('./landing-page-login/landing-page-login.module').then((m) => m.LandingPageLoginModule),
    data: {animation: 'loginPage'}
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    data: {animation: 'homePage'}
  },

  {
    path: 'movies',
    loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule),
    data: {animation: 'moviesPage'}
  },
  {
    path: 'shows',
    loadChildren: () => import('./shows/shows.module').then(m => m.ShowsModule),
    data: {animation: 'showsPage'}
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
