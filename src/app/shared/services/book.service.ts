import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Book} from "../interfaces/book";
import {AddBook} from "../interfaces/add-book";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiServerUrl = environment.apiBaseUrlBook;

  constructor(private http: HttpClient) {

  }

  getAllBooks(): Observable<Book[]>{
   console.log("getting all books")
   return  this.http.get<Book[]>(`${this.apiServerUrl}/all`)
  }

  deleteBook(id:number): Observable<Object>{
    return this.http.delete(`${this.apiServerUrl}/delete/${id}`)
  }

  addNoteToBook(id:number, pageNumber:number): Observable<Object> {
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };
    return this.http.post(`${this.apiServerUrl}/add/${id}`, pageNumber, options)
  }

  getBookById(id:number):Observable<Book>{
    return this.http.get<Book>(`${this.apiServerUrl}/find/${id}`)
  }

  addBook(bookItem:AddBook){
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };
    // console.log(`${this.apiServerUrl}/save`)
    // console.log(bookItem)
    return this.http.post<AddBook>(`${this.apiServerUrl}/save`, bookItem, options)
  }

  editBook(editBook: Book) {
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };
    return this.http.post<Book>(`${this.apiServerUrl}/edit`, editBook, options)
  }
}
