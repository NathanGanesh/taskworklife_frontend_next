import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {JournalListItem} from "../interfaces/journal-list-item";
import {OkrItem} from "../interfaces/okr/okr-item";
import {OkrObjective} from "../interfaces/okr/okr-objective";

@Injectable({
  providedIn: 'root'
})
export class OkrServiceService {
  private apiServerUrl = environment.apiBaseUrlOKR;

  constructor(private http: HttpClient) {
  }
  getAllOkrs(): Observable<OkrItem[]> {
    return this.http.get<OkrItem[]>(`${this.apiServerUrl}/all`)
  }

  addOkrObjective(id: number, okrObjective: OkrObjective) {
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };
    return this.http.post(`${this.apiServerUrl}/add/${id}`, okrObjective, options)
  }

  // deleteBook(id:number): Observable<Object>{
  //   return this.http.delete(`${this.apiServerUrl}/delete/${id}`)
  // }

  deleteOkr(id:number) {
    return this.http.delete(`${this.apiServerUrl}/delete/${id}`)
  }

  addOkr(okr:OkrItem){
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };
    console.log(okr)
    return this.http.post(`${this.apiServerUrl}/add`, okr, options)
  }

}
