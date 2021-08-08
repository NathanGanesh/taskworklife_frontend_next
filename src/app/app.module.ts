import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NestedTreeComponent } from './nested-tree/nested-tree.component';
import {MaterialModule} from "./material/material.module";
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {
  FormsModule,
  ReactiveFormsModule
} from "@angular/forms";
import {BookService} from "./shared/services/book.service";

import {HttpClientModule} from "@angular/common/http";
import { ChartsModule } from 'ng2-charts';

import {
  DateAdapter,
  MAT_DATE_LOCALE,
  MatNativeDateModule,
  MatOptionModule
} from "@angular/material/core";
import {
  MatDialogActions,
  MatDialogModule
} from "@angular/material/dialog";
import {ButtonModule} from "primeng/button";
import { InputChipAutoCompleteComponent } from './input-chip-auto-complete/input-chip-auto-complete.component';
import {MatChipsModule} from "@angular/material/chips";
import { AutocompleteInputComponent } from './autocomplete-input/autocomplete-input.component';
import {CustomDateAdapter} from "./shared/helpers/custom-date-adapter";
import { SearchFilterPipe } from './shared/helpers/search-filter.pipe';
import {JournalService} from "./shared/services/journal.service";

@NgModule({
  declarations: [
    AppComponent,
    NestedTreeComponent,
    NotFoundComponentComponent,
    HomeComponentComponent,
    AutocompleteInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ButtonModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    ChartsModule,
    ReactiveFormsModule,
  ],
  providers: [BookService, JournalService, {
    provide: MAT_DATE_LOCALE,
    useValue: 'en-GB'
  },
    {provide: DateAdapter, useClass: CustomDateAdapter}],

  bootstrap: [AppComponent]
})
export class AppModule { }
