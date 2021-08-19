import { Component, OnInit } from '@angular/core';
import {TaskService} from "../../shared/services/task.service";
import {Book} from "../../shared/interfaces/book";
import {GroupItem} from "../../shared/interfaces/task/group-item";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  opened: boolean = false;
  tasks: GroupItem[] = [];

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
}
