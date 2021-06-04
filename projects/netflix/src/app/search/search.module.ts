import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareModule } from './../share/share.module';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { SearchResultComponent } from './search-result/search-result.component';


@NgModule({
  declarations: [
    SearchComponent,
    SearchResultComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    ReactiveFormsModule,
    ShareModule
  ]
})
export class SearchModule { }
