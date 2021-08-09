import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../interfaces/book";
import {Journal} from "../interfaces/journal";
import {JournalListItem} from "../interfaces/journal-list-item";

@Injectable({
  providedIn: 'root'
})
export class JournalService {
  private apiServerUrl = environment.apiBaseUrlJournal;

  constructor(private http: HttpClient) {

  }

  getAllJournals(): Observable<JournalListItem[]>{
    console.log("getting all books")
    return  this.http.get<JournalListItem[]>(`${this.apiServerUrl}/all`)
  }

  submitMorning(e: any) {
    
  }
}
