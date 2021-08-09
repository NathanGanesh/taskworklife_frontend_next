import {JournalType} from "./journal-type";
import {Journal} from "./journal";

export class JournalMorning extends Journal{
  majorTasks:string;
  coreGoals:string;
  scheduleToday:string;
  distractions:string;
  oneThingToAvoid:string;


  constructor(id: number, date: Date, journalType: JournalType, title: string, majorTasks: string, coreGoals: string, scheduleToday: string, distractions: string, oneThingToAvoid: string) {
    super(id, date, journalType, title);
    this.majorTasks = majorTasks;
    this.coreGoals = coreGoals;
    this.scheduleToday = scheduleToday;
    this.distractions = distractions;
    this.oneThingToAvoid = oneThingToAvoid;
  }
}
