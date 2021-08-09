import {Journal} from "./journal";
import {JournalType} from "./journal-type";

export class JournalWeekly extends Journal{
  progressThisWeek:string;
  successThisWeek:string;
  doThingsDifferent:string;
  frustrating:string;
  wasteTime:string;
  areaFocus:string;
  priority:string;


  constructor(id: number, date: Date, journalType: JournalType, title: string, progressToday: string, successThisWeek: string, doThingsDifferent: string, frustrating: string, wasteTime: string, areaFocus: string, priority: string) {
    super(id, date, journalType, title);
    this.progressThisWeek = progressToday;
    this.successThisWeek = successThisWeek;
    this.doThingsDifferent = doThingsDifferent;
    this.frustrating = frustrating;
    this.wasteTime = wasteTime;
    this.areaFocus = areaFocus;
    this.priority = priority;
  }
}
