import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskListComponent } from './task-list/task-list.component';
import { TasksComponent } from './tasks/tasks.component';
import { ProjectListComponent } from './project-list/project-list.component';
import {MaterialModule} from "../material/material.module";
import { TaskViewComponent } from './task-view/task-view.component';
import {FormsModule} from "@angular/forms";
import { FolderAddDialogComponent } from './folder-add-dialog/folder-add-dialog.component';
import { FolderItemDialogComponent } from './folder-item-dialog/folder-item-dialog.component';


@NgModule({
  declarations: [
    TaskListComponent,
    TasksComponent,
    ProjectListComponent,
    TaskViewComponent,
    FolderAddDialogComponent,
    FolderItemDialogComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class TaskModule { }
