import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HabitHomeComponent} from "./habit-home/habit-home.component";

const routes: Routes = [{path:"", component: HabitHomeComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HabitRoutingModule { }
