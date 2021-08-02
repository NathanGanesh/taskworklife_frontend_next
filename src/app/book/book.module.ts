import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BookRoutingModule} from './book-routing.module';
import {BookListComponent} from './book-list/book-list.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {BookComponent} from './book/book.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {
  MatGridList,
  MatGridListModule, MatGridTile
} from "@angular/material/grid-list";
import {
  MatIcon,
  MatIconModule
} from "@angular/material/icon";
import {
  FormsModule,
  ReactiveFormsModule
} from "@angular/forms";
import {
  MatList,
  MatListModule
} from "@angular/material/list";
import {BookService} from "../shared/services/book.service";
import {
  HTTP_INTERCEPTORS,
  HttpClientModule
} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {BookAddComponent} from './book-add/book-add.component';
import {ChartsModule} from "ng2-charts";
import {LineChartComponent} from './line-chart/line-chart.component';
import {MyChartModule} from "../shared/interfaces/my-p-chart";
import {ChartModule} from "primeng/chart";
import {MatDialogModule} from "@angular/material/dialog";
import {DialogOverviewExampleDialog} from "../dialog-overview/dialog-overview.component";
import {ButtonModule} from "primeng/button";
import {MatButtonModule} from "@angular/material/button";
import {LayoutModule} from "@angular/cdk/layout";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatChipsModule} from "@angular/material/chips";
import {AppModule} from "../app.module";
import {InputChipAutoCompleteComponent} from "../input-chip-auto-complete/input-chip-auto-complete.component";
import {
  MatNativeDateModule,
  MatOptionModule
} from "@angular/material/core";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {SearchFilterPipe} from "../shared/helpers/search-filter.pipe";
import {MaterialModule} from "../material/material.module";


@NgModule({
  declarations: [
    BookListComponent,
    BookDetailComponent,
    BookComponent,
    BookAddComponent,
    LineChartComponent,
    DialogOverviewExampleDialog,
    SearchFilterPipe,
    InputChipAutoCompleteComponent,
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    ButtonModule,
    FormsModule,
    HttpClientModule,

    LayoutModule,
    FlexLayoutModule,
    ChartModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [
    BookService,
  ]
})
export class BookModule {
}
