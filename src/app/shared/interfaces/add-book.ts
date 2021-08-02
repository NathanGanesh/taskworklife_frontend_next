import {BookNote} from "./book-note";

enum Status{
  READING,CURRENTLY_READING,PLAN_TO_READ,COMPLETED,DROPPED
}

export class AddBook {
  id?:number;
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


  constructor(id: number = -1, name: string, bookNoteArrayList: BookNote[], categories: string[], currentPage: number, finalPage: number, status: Status, author: string, startDate: Date, endDate: Date, file: File) {
    this.id = id;
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
