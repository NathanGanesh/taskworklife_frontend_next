import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../interfaces/book";

@Injectable({
  providedIn: 'root'
})
export class JournalService {
  private apiServerUrl = environment.apiBaseUrlJournal;

  constructor(private http: HttpClient) {

  }

  getAllBooks(): Observable<Book[]>{
    console.log("getting all books")
    return  this.http.get<Book[]>(`${this.apiServerUrl}/all`)
  }
}
