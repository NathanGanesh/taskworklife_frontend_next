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
    this.id = this.route.snapshot.params['id'];
    console.log(this.route.snapshot.params['id'])
    this.loadSingleGroup(this.id);
  }

  testItem(element: any) {
    console.log(element)
  }


  onSelectChange(element: any) {
    console.log(element)
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
        // if ()
        this.taskService.addNewFolderToGroup(res).pipe(tap(() => this.loadSingleGroup(res.id))).subscribe();
      }
    })
  }

  onDeleteFolderItem(element: number) {
    console.log(element)
    console.log("deleting folder item")
  }

  onAddFolderItem(folder: Folder) {
    const dialogRef = this.addFolderDialog.open(FolderItemDialogComponent, {data: {id: folder.id}});
    dialogRef.afterClosed().subscribe((res:TaskAddToFolder) => {
      if (res!==undefined){
        console.log(res)
        this.taskService.addNewTaskItemToFolder(res).pipe(tap(() => this.loadSingleFolder(res.id))).subscribe()
      }
    })

  }

   loadSingleFolder(id:any) {
      this.taskService.getFolderById(id);
  }
}
