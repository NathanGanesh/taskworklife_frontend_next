import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TasksComponent} from "./tasks/tasks.component";
import {TaskViewComponent} from "./task-view/task-view.component";

const routes: Routes = [
  {
  path:"",
  component:TasksComponent,
  children:[
    {path:":id", component:TaskViewComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
