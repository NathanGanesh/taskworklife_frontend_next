import {Journal} from "./journal";
import {JournalType} from "./journal-type";

export class JournalNormal extends Journal{
      text:string;


  constructor(id: number, date: Date, journalType: JournalType, title: string, text: string) {
    super(id, date, journalType, title);
    this.text = text;
  }
}
