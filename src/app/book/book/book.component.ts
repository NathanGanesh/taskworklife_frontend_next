import { Component, OnInit } from '@angular/core';
import {BookService} from "../../shared/services/book.service";
import {Observable} from "rxjs";
import {Book} from "../../shared/interfaces/book";
import { tap } from 'rxjs/operators';
import {HttpErrorResponse} from "@angular/common/http";
import {AddNoteResp} from "../../shared/interfaces/add-note-resp";
import {AddBook} from "../../shared/interfaces/add-book";


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books$: Book[] = [];
  searchKeyword:string = "";
  constructor(private bookService:BookService) {

  }


  handleListBooks(){
    this.bookService.getAllBooks().subscribe(
      (response: Book[]) => {
        this.books$ = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  deleteBook(id:number){
    return this.bookService.deleteBook(id).pipe(tap(() => this.handleListBooks())).subscribe();
  }


  addNoteToBook(addNote:AddNoteResp){
    return this.bookService.addNoteToBook(addNote.id, addNote.pageNumber).pipe(tap(() =>this.handleListBooks())).subscribe()
  }


  ngOnInit(): void {
    this.handleListBooks()
  }

}
