import {JournalType} from "./journal-type";

export class Journal {
  id:number;
  date:Date;
  journalType:JournalType

  constructor(id: number, date: Date, journalType: JournalType) {
    this.id = id;
    this.date = date;
    this.journalType = journalType;
  }
}
