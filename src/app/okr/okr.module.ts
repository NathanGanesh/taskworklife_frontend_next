import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OkrRoutingModule } from './okr-routing.module';
import { OkrlistComponent } from './okrlist/okrlist.component';
import { OkrComponent } from './okr/okr.component';
import {MaterialModule} from "../material/material.module";
import { OkrcreateComponent } from './okrcreate/okrcreate.component';
import { OkrtableComponent } from './okrtable/okrtable.component';


@NgModule({
  declarations: [
    OkrlistComponent,
    OkrComponent,
    OkrcreateComponent,
    OkrtableComponent
  ],
  imports: [
    CommonModule,
    OkrRoutingModule,
    MaterialModule
  ]
})
export class OkrModule { }
