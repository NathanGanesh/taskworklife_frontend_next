import { Component, OnInit } from '@angular/core';
import {BookService} from "../../shared/services/book.service";
import {Observable} from "rxjs";
import {Book} from "../../shared/interfaces/book";
import { tap } from 'rxjs/operators';
import {HttpErrorResponse} from "@angular/common/http";
import {AddNoteResp} from "../../shared/interfaces/add-note-resp";


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books$: Book[] = [];
  searchMode: boolean = false;

  searchKeyword:string = "";
  constructor(private bookService:BookService) {

  }

  loadBooks(){
    if (this.searchMode){

    }else{
      this.handleListBooks()
    }
  }
  handleSearchBooks(){

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
    return this.bookService.deleteBook(id).pipe(tap(() => this.loadBooks())).subscribe();
  }


  addNoteToBook(addNote:AddNoteResp){
    return this.bookService.addNoteToBook(addNote.id, addNote.pageNumber).pipe(tap(() =>this.loadBooks())).subscribe()
  }


  ngOnInit(): void {
    this.loadBooks();
  }

}
