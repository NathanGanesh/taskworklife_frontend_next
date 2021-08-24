import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {TaskService} from "../../shared/services/task.service";
import {Book} from "../../shared/interfaces/book";
import {GroupItem} from "../../shared/interfaces/task/group-item";
import {HttpErrorResponse} from "@angular/common/http";
import {JournalListItem} from "../../shared/interfaces/journal-list-item";
import {Habit} from "../../shared/interfaces/habit";
import {Folder} from "../../shared/interfaces/task/folder";
import {MatDialog} from "@angular/material/dialog";
import {AddGroupDialogComponent} from "../add-group-dialog/add-group-dialog.component";
import {tap} from "rxjs/operators";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TasksComponent implements OnInit {
  opened: boolean = true;
  tasks: GroupItem[] = [];
  //@ts-ignore
  selectedItem: GroupItem = new GroupItem();
  sidenavWidth = 4;
  //@ts-ignore
  // @ViewChild(MatSort) sort: MatSort;
  // ngAfterViewInit() {
  //   this.dataSource.sort = this.sort;
  // }

  constructor(private taskService: TaskService, public addGroupDialog: MatDialog,) {

  }

  ngOnInit(): void {
    this.handleGroupItems()
  }

  handleGroupItems() {
    this.taskService.getAllGroups().subscribe(
      (response: GroupItem[]) => {
        console.log(response)
        this.tasks = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  onTaskItemClick(taskItem: GroupItem) {
    console.log(taskItem)
    this.selectedItem = taskItem;
  }


  increase() {
    this.sidenavWidth = 15;
  }

  decrease() {
    this.sidenavWidth = 4;
  }

  addNewGroup() {
    const dialogRef = this.addGroupDialog.open(AddGroupDialogComponent)
    dialogRef.afterClosed().subscribe((res) => {
      if (res !== undefined) {
        this.taskService.addNewGroup(res).pipe(tap(() => this.handleGroupItems())).subscribe()
      }
    })
  }

  deleteGroupById(id: number) {
    this.taskService.deleteGroupById(id).pipe(tap(() => this.handleGroupItems())).subscribe()
  }

  editGroupById(groupName: string, id: number) {
    let dialogRef;
    if (id!=null){
     dialogRef = this.addGroupDialog.open(AddGroupDialogComponent, {data: {groupName,id}})
    }else{
      dialogRef = this.addGroupDialog.open(AddGroupDialogComponent, {data: {groupName}})
    }
    dialogRef.afterClosed().subscribe((res) => {
      console.log(res)
      if (res !== undefined) {
        if (res.id === undefined) {
          this.taskService.addNewGroup(res).pipe(tap(() => this.handleGroupItems())).subscribe()
        } else {
          console.log(res)
          this.taskService.editNewGroup(res).pipe((tap(() => this.handleGroupItems()))).subscribe()
        }
      }
    })
  }
}
