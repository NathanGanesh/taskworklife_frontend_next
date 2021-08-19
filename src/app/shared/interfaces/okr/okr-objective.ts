import {OkrStatus} from "./okr-status";
import {OkrPriority} from "./okr-priority";

export class OkrObjective {
  name:string;
  id?:number;
  startDateObjective:Date;
  endDateObjective:Date;
  okrObjectiveStatus:OkrStatus;
  priorityObjective:OkrPriority;

  constructor(name: string, id: number, startDateObjective: Date, endDateObjective: Date, okrStatus: OkrStatus, okrPriority: OkrPriority) {
    this.name = name;
    this.id = id;
    this.startDateObjective = startDateObjective;
    this.endDateObjective = endDateObjective;
    this.okrObjectiveStatus = okrStatus;
    this.priorityObjective = okrPriority;
  }
}
