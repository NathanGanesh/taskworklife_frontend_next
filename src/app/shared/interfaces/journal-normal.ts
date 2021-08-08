import {Journal} from "./journal";
import {JournalType} from "./journal-type";

export class JournalNormal extends Journal{
      text:string;


  constructor(id: number, date: Date, journalType: JournalType, text: string) {
    super(id, date, journalType);
    this.text = text;
  }
}
