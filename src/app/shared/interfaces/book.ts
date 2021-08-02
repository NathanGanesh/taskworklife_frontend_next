import {BookNote} from "./book-note";

export class Book {
  id:number;
  name:string;
  bookNoteArrayList?:BookNote[]= [];


  constructor(id: number =0, name: string = "", bookNoteArrayList: BookNote[]=[]) {
    this.id = id;
    this.name = name;
    this.bookNoteArrayList = bookNoteArrayList;
  }
}
