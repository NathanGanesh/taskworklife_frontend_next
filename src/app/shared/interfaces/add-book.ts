import {BookNote} from "./book-note";
import {Status} from "./status";


export class AddBook {
  name:string;
  bookNoteArrayList?:BookNote[]= [];
  categories:string[];
  currentPage?:number;
  finalPage:number;
  status:Status;
  author:string;
  startDate?:Date;
  endDate?:Date;
  file?:File;

  constructor(name: string = "", bookNoteArrayList: BookNote[], categories: string[] = [], currentPage: number, finalPage: number = -1, status: Status = Status.NO_STATUS, author: string = "", startDate: Date, endDate: Date, file: File) {
    this.name = name;
    this.bookNoteArrayList = bookNoteArrayList;
    this.categories = categories;
    this.currentPage = currentPage;
    this.finalPage = finalPage;
    this.status = status;
    this.author = author;
    this.startDate = startDate;
    this.endDate = endDate;
    this.file = file;
  }
}
