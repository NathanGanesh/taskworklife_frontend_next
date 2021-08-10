import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../interfaces/book";
import {Journal} from "../interfaces/journal";
import {JournalListItem} from "../interfaces/journal-list-item";
import {MorningJournal} from "../interfaces/morning-journal";
import {JournalNight} from "../interfaces/journal-night";
import {JournalWeekly} from "../interfaces/journal-weekly";
import {JournalNormal} from "../interfaces/journal-normal";

@Injectable({
  providedIn: 'root'
})
export class JournalService {
  private apiServerUrl = environment.apiBaseUrlJournal;

  constructor(private http: HttpClient) {

  }

  getAllJournals(): Observable<JournalListItem[]> {
    console.log("getting all books")
    return this.http.get<JournalListItem[]>(`${this.apiServerUrl}/all`)
  }

  submitMorning(e: MorningJournal) {
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };
    return this.http.post<MorningJournal>(`${this.apiServerUrl}/save`, e, options)
  }

  submitNight(reqObject: JournalNight) {
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };
    return this.http.post<MorningJournal>(`${this.apiServerUrl}/save`, reqObject, options)
  }

  submitWeekly(reqObject: JournalWeekly) {
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };
    return this.http.post<JournalNight>(`${this.apiServerUrl}/save`, reqObject, options)
  }

  submitNormalJournal(reqObject: JournalNormal) {
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };
    return this.http.post<JournalNormal>(`${this.apiServerUrl}/save`, reqObject, options)
  }
}
