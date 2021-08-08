import {Journal} from "./journal";
import {JournalType} from "./journal-type";

export class JournalWeekly extends Journal{
  progressToday
  successThisWeek
  doThingsDifferent
  frustrating
  wasteTime
  areaFocus
  priority

  constructor(id: number, date: Date, journalType: JournalType, progressToday, successThisWeek, doThingsDifferent, frustrating, wasteTime, areaFocus, priority) {
    super(id, date, journalType);
    this.progressToday = progressToday;
    this.successThisWeek = successThisWeek;
    this.doThingsDifferent = doThingsDifferent;
    this.frustrating = frustrating;
    this.wasteTime = wasteTime;
    this.areaFocus = areaFocus;
    this.priority = priority;
  }
}
