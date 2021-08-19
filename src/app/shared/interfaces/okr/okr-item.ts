import {OkrObjective} from "./okr-objective";
import {OkrStatus} from "./okr-status";
import {OkrPriority} from "./okr-priority";

export class OkrItem {
  okrTitle:string;
  okrObjectivesList?:OkrObjective[];
  endDateOkr:Date;
  startDateOkr:Date;
  okrStatus:OkrStatus;
  priority:OkrPriority;
  id?:number;


  constructor(okrTitle: string, okrObjectivesList: OkrObjective[], endDateOkr: Date, startDateOkr: Date, okrStatus: OkrStatus, priority: OkrPriority, id: number) {
    this.okrTitle = okrTitle;
    this.okrObjectivesList = okrObjectivesList;
    this.endDateOkr = endDateOkr;
    this.startDateOkr = startDateOkr;
    this.okrStatus = okrStatus;
    this.priority = priority;
    this.id = id;
  }
}
