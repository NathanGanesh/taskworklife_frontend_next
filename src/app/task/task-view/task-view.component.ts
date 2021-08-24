import {Component, Input, OnInit} from '@angular/core';
import {GroupItem} from "../../shared/interfaces/task/group-item";
import {MatSelectChange} from "@angular/material/select";
import {OkrPriority} from "../../shared/interfaces/okr/okr-priority";
import {MatDialog} from "@angular/material/dialog";
import {TaskService} from "../../shared/services/task.service";
import {FolderAddDialogComponent} from "../folder-add-dialog/folder-add-dialog.component";
import {tap} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";
import {FolderItemDialogComponent} from "../folder-item-dialog/folder-item-dialog.component";
import {Folder} from "../../shared/interfaces/task/folder";
import {TaskAddToFolder} from "../../shared/interfaces/task/TaskAddToFolder";
import {EditFolderComponent} from "../edit-folder/edit-folder.component";

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent implements OnInit {
  id: number = -1;

  //@ts-ignore
  selectedItem: GroupItem;
  panelOpenState: boolean = false;
  nestedOpenState: boolean = false;
  // displayedColumns: string[] = [ "id",'date', 'completed', 'priority', 'status'];
  displayedColumns: string[] = ['name', "date", "priority", "status", "deleteEmployee"];
  priority: string[] = ["HIGH", "MEDIUM", "LOW", "NO_PRIORITY"]
  status: string[] = ["DONE", "WORKING_ON_IT", "STRUGGLING", "STUCK"];

  constructor(public addFolderDialog: MatDialog, private taskService: TaskService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(res => {
      this.id = res.id;
      this.loadSingleGroup(this.id);
    })

  }

  // new Date().toISOString().slice(0,10)
  onSelectChange(element: any) {
    this.taskService.editTaskItemFromFolder(element).subscribe()

  }

  loadSingleGroup(id: number) {
    this.taskService.getGroupById(id).subscribe(data => {
      this.selectedItem = data;
      console.log(data)
    }, error => console.log(error))

  }


  addNewFolder($event: any) {
    $event.stopPropagation();
    const dialogRef = this.addFolderDialog.open(FolderAddDialogComponent, {
      data: {
        groupName: this.selectedItem.groupName,
        id: this.selectedItem.id
      }
    })
    dialogRef.afterClosed().subscribe((res) => {
      if (res !== undefined) {
        this.taskService.addNewFolderToGroup(res).pipe(tap(() => this.loadSingleGroup(res.id))).subscribe();
      }
    })
  }

  // onDeleteFolderItem(element: number) {
  //   this.taskService.deleteFolderById(element).subscribe();
  //
  // }

  onAddFolderItem(folder: Folder) {
    const dialogRef = this.addFolderDialog.open(FolderItemDialogComponent, {data: {id: folder.id}});
    dialogRef.afterClosed().subscribe((res: TaskAddToFolder) => {
      if (res !== undefined) {
        console.log(res)
        this.taskService.addNewTaskItemToFolder(res).pipe(tap(() => this.loadSingleGroup(this.selectedItem.id))).subscribe()
      }
    })

  }

  loadSingleFolder(id: any) {
    this.taskService.getFolderById(id).subscribe();
  }

  onDeleteTaskItem(folderId: number, id: number) {
    this.taskService.deleteTaskById(folderId, id).pipe((tap(() => this.loadSingleGroup(this.selectedItem.id)))).subscribe()
  }

  onDeleteFolderItem($event: MouseEvent, id: number) {
    $event.stopPropagation();
    this.taskService.deleteFolderById(this.selectedItem.id, id).pipe((tap(() => this.loadSingleGroup(this.selectedItem.id)))).subscribe();
  }

  onSelectDateChange(element: any) {
    let s = new Date(element.date.getFullYear(), element.date.getMonth(), element.date.getDate(), element.date.getHours(), element.date.getMinutes() - element.date.getTimezoneOffset()).toISOString();
    let newObject = JSON.parse(JSON.stringify(element));
    newObject.date = s;
    this.taskService.editTaskItemFromFolder(newObject).subscribe()
  }

  onEditFolder($event: MouseEvent, nameFolder: string, id: number) {
    $event.stopPropagation();

    const dialogRef = this.addFolderDialog.open(EditFolderComponent, {data: {id:id, title:nameFolder}});
    dialogRef.afterClosed().subscribe((res) => {
      if (res !== undefined) {
        console.log(res)
        this.taskService.editFolder(res).pipe(tap(() => this.loadSingleGroup(this.selectedItem.id))).subscribe()
      }
    })
  }
}
