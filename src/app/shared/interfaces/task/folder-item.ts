import {OkrPriority} from "../okr/okr-priority";
import {OkrStatus} from "../okr/okr-status";

export class FolderItem {
  id:number;
  name:string;
  date:Date;
  completed:boolean;
  priority:OkrPriority;
  status:OkrStatus;


  constructor(id: number, name: string, date: Date, completed: boolean, priority: OkrPriority, status: OkrStatus) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.completed = completed;
    this.priority = priority;
    this.status = status;
  }
}
