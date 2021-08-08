import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OkrComponent} from "./okr/okr.component";
import {createComponent} from "@angular/compiler/src/core";
import {OkrcreateComponent} from "./okrcreate/okrcreate.component";

const routes: Routes = [{path:"", component: OkrComponent}, {path:"create", component: OkrcreateComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OkrRoutingModule { }
