import {Component, Input, OnInit} from '@angular/core';
import {GroupItem} from "../../shared/interfaces/task/group-item";
import {MatSelectChange} from "@angular/material/select";
import {OkrPriority} from "../../shared/interfaces/okr/okr-priority";

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent implements OnInit {
  @Input()
    //@ts-ignore
  selectedItem: GroupItem;
  panelOpenState: boolean = false;
  nestedOpenState: boolean = false;
  // displayedColumns: string[] = [ "id",'date', 'completed', 'priority', 'status'];
  displayedColumns: string[] = ['name', "date", "priority", "status"];
  priority:string[] = ["HIGH","MEDIUM","LOW","NO_PRIORITY"]
  status:string[] = ["DONE","WORKING_ON_IT","STRUGGLING", "STUCK"];
  constructor() {
  }

  ngOnInit(): void {
    if (this.selectedItem !== undefined) {
      console.log(this.selectedItem)
    }
  }

  testItem(element:any) {
    console.log(element)
  }


  onSelectChange( element:any) {
    console.log(element)
  }
}
