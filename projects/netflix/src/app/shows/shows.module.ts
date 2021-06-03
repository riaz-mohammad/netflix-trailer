import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowsRoutingModule } from './shows-routing.module';
import { ShowsComponent } from './shows.component';
import { ShowComponent } from './show/show.component';


@NgModule({
  declarations: [
    ShowsComponent,
    ShowComponent
  ],
  imports: [
    CommonModule,
    ShowsRoutingModule
  ]
})
export class ShowsModule { }
