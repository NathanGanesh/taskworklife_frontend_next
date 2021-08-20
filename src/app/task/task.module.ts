import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskListComponent } from './task-list/task-list.component';
import { TasksComponent } from './tasks/tasks.component';
import { ProjectListComponent } from './project-list/project-list.component';
import {MaterialModule} from "../material/material.module";
import { TaskViewComponent } from './task-view/task-view.component';


@NgModule({
  declarations: [
    TaskListComponent,
    TasksComponent,
    ProjectListComponent,
    TaskViewComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    MaterialModule
  ]
})
export class TaskModule { }
