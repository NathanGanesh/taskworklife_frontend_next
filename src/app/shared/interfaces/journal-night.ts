import {Journal} from "./journal";
import {JournalType} from "./journal-type";

export class JournalNight extends Journal{
  thingsDone:string
  coreGoals:string
  distractions:string
  habit:string
  avoid:string
  planTomorrow:string

  constructor(id: number, date: Date, journalType: JournalType, thingsDone: string, coreGoals: string, distractions: string, habit: string, avoid: string, planTomorrow: string) {
    super(id, date, journalType);
    this.thingsDone = thingsDone;
    this.coreGoals = coreGoals;
    this.distractions = distractions;
    this.habit = habit;
    this.avoid = avoid;
    this.planTomorrow = planTomorrow;
  }
}
