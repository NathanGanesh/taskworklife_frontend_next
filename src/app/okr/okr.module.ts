import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OkrRoutingModule } from './okr-routing.module';
import { OkrlistComponent } from './okrlist/okrlist.component';


@NgModule({
  declarations: [
    OkrlistComponent
  ],
  imports: [
    CommonModule,
    OkrRoutingModule
  ]
})
export class OkrModule { }
