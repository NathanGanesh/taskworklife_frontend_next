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
import { AddGroupDialogComponent } from './add-group-dialog/add-group-dialog.component';
import {MAT_DATE_LOCALE} from "@angular/material/core";
import { EditFolderComponent } from './edit-folder/edit-folder.component';


@NgModule({
  declarations: [
    TaskListComponent,
    TasksComponent,
    ProjectListComponent,
    TaskViewComponent,
    FolderAddDialogComponent,
    FolderItemDialogComponent,
    AddGroupDialogComponent,
    EditFolderComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    MaterialModule,
    FormsModule
  ],
  providers:[{
    provide: MAT_DATE_LOCALE,
    useValue: 'nl-NL'
  }]
})
export class TaskModule { }
