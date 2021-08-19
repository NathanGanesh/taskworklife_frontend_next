import {HabitEntry} from "./habit-entry";

export class Habit {
  id:number;
  date:Date;
  habitEntryList:HabitEntry;


  constructor(id: number, date: Date, habitEntryList: HabitEntry) {
    this.id = id;
    this.date = date;
    this.habitEntryList = habitEntryList;
  }
}
