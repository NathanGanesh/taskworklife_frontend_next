import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookComponent} from "./book/book.component";
import {BookDetailComponent} from "./book-detail/book-detail.component";
import {BookAddComponent} from "./book-add/book-add.component";

const routes: Routes = [{path:"create", component:BookAddComponent},{path:"", component: BookComponent}, {path:":id", component:BookDetailComponent}, {path:"edit/:id", component: BookAddComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
