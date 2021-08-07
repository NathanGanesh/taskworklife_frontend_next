import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JournalRoutingModule } from './journal-routing.module';
import { JournalComponent } from './journal/journal.component';
import {MaterialModule} from "../material/material.module";
import { MorningComponent } from './morning/morning.component';
import { NightComponent } from './night/night.component';
import { WeeklyComponent } from './weekly/weekly.component';
import { NormalComponent } from './normal/normal.component';
import {FormsModule} from "@angular/forms";
import {AngularEditorModule} from "@kolkov/angular-editor";


@NgModule({
  declarations: [
    JournalComponent,
    MorningComponent,
    NightComponent,
    WeeklyComponent,
    NormalComponent
  ],
  imports: [
    CommonModule,
    JournalRoutingModule,
    MaterialModule,
    FormsModule,
    AngularEditorModule
  ]
})
export class JournalModule { }
