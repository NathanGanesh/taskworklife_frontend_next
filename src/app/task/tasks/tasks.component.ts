import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TaskService} from "../../shared/services/task.service";
import {Book} from "../../shared/interfaces/book";
import {GroupItem} from "../../shared/interfaces/task/group-item";
import {HttpErrorResponse} from "@angular/common/http";
import {JournalListItem} from "../../shared/interfaces/journal-list-item";
import {Habit} from "../../shared/interfaces/habit";
import {Folder} from "../../shared/interfaces/task/folder";

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
  selectedItem:GroupItem = new GroupItem( );
  sidenavWidth = 4;

  constructor(private taskService:TaskService) {

  }

  ngOnInit(): void {
    this.handleGroupItems()
  }

  handleGroupItems(){
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
}
