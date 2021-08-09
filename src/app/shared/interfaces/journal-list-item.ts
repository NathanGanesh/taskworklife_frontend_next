import {Journal} from "./journal"
import {JournalType} from "./journal-type"

export class JournalListItem extends Journal {
  constructor(id: number, date: Date, journalType: JournalType, title: string, majorTasks: string, coreGoals: string, scheduleToday: string, distractions: string, oneThingToAvoid: string, thingsDone: string, habit: string, avoid: string, planTomorrow: string, text: string, progressThisWeek: string, successThisWeek: string, doThingsDifferent: string, frustrating: string, wasteTime: string, areaFocus: string, priority: string) {
    super(id, date, journalType, title);
    this.majorTasks = majorTasks;
    this.coreGoals = coreGoals;
    this.scheduleToday = scheduleToday;
    this.distractions = distractions;
    this.oneThingToAvoid = oneThingToAvoid;
    this.thingsDone = thingsDone;
    this.habit = habit;
    this.avoid = avoid;
    this.planTomorrow = planTomorrow;
    this.text = text;
    this.progressThisWeek = progressThisWeek;
    this.successThisWeek = successThisWeek;
    this.doThingsDifferent = doThingsDifferent;
    this.frustrating = frustrating;
    this.wasteTime = wasteTime;
    this.areaFocus = areaFocus;
    this.priority = priority;
  }

  majorTasks?: string;
  coreGoals?: string;
  scheduleToday?: string;
  distractions?: string;
  oneThingToAvoid?: string;
  thingsDone?: string;
  habit?: string;
  avoid?: string;
  planTomorrow?: string;
  text?: string;
  progressThisWeek?: string;
  successThisWeek?: string;
  doThingsDifferent?: string;
  frustrating?: string;
  wasteTime?: string;
  areaFocus?: string;
  priority?: string;


}
