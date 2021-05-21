import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LandingPageLoginComponent } from './../landing-page/landing-page-components/landing-page-login/landing-page-login.component';

const routes: Routes = [{
  path: '',
  component: LandingPageLoginComponent
}]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageLoginRoutingModule {}
