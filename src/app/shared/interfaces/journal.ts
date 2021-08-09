import {JournalType} from "./journal-type";

export class Journal {
  id:number;
  date:Date;
  journalType:JournalType
  title:string;

  constructor(id: number, date: Date, journalType: JournalType, title: string) {
    this.id = id;
    this.date = date;
    this.journalType = journalType;
    this.title = title;
  }
}
