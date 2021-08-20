import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HabitRoutingModule } from './habit-routing.module';

import {JournalRoutingModule} from "../journal/journal-routing.module";
import {MaterialModule} from "../material/material.module";
import {FormsModule} from "@angular/forms";
import {AngularEditorModule} from "@kolkov/angular-editor";
import {HabitHomeComponent} from "./habit-home/habit-home.component";


@NgModule({
  declarations: [
    HabitHomeComponent,

  ],
  imports: [
    CommonModule,
    HabitRoutingModule,
    JournalRoutingModule,
    MaterialModule,
    FormsModule,
    AngularEditorModule
  ]
})
export class HabitModule { }
