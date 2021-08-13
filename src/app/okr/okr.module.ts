import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OkrRoutingModule } from './okr-routing.module';
import { OkrlistComponent } from './okrlist/okrlist.component';
import { OkrComponent } from './okr/okr.component';
import {MaterialModule} from "../material/material.module";
import { OkrcreateComponent } from './okrcreate/okrcreate.component';
import { OkrtableComponent } from './okrtable/okrtable.component';
import { OkrDialogAddComponent } from './okr-dialog-add/okr-dialog-add.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    OkrlistComponent,
    OkrComponent,
    OkrcreateComponent,
    OkrtableComponent,
    OkrDialogAddComponent
  ],
    imports: [
        CommonModule,
        OkrRoutingModule,
        MaterialModule,
        ReactiveFormsModule
    ]
})
export class OkrModule { }
