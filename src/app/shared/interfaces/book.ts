import {BookNote} from "./book-note";
import {Status} from "./status";

export class Book {
  id:number = -1;
  name:string;
  bookNoteArrayList:BookNote[]= [];
  finalPage:number;
  author:string;
  status:Status;
  startDate:Date;
  endDate:Date;
  categories:string[];
  file?:File;


  constructor(id: number = -1, name: string = "", bookNoteArrayList: BookNote[] = [], finalPage: number = -1, author: string = "", status: Status = Status.NO_STATUS, startDate: Date = new Date(), endDate: Date = new Date(), category:string[] = [] , file: File) {
    this.id = id;
    this.name = name;
    this.bookNoteArrayList = bookNoteArrayList;
    this.finalPage = finalPage;
    this.author = author;
    this.status = status;
    this.startDate = startDate;
    this.endDate = endDate;
    this.categories = category;
    this.file = file
  }

}
