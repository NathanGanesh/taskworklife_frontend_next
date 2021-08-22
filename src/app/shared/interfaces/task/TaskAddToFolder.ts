import {Folder} from "./folder";
import {OkrPriority} from "../okr/okr-priority";
import {OkrStatus} from "../okr/okr-status";

export class TaskAddToFolder {
  date:Date;
  folderTitle:string;
  id:number;
  priority:OkrPriority;
  status:OkrStatus;


  constructor(date: Date, folderTitle: string, id: number, priority: OkrPriority, status: OkrStatus) {
    this.date = date;
    this.folderTitle = folderTitle;
    this.id = id;
    this.priority = priority;
    this.status = status;
  }
}
