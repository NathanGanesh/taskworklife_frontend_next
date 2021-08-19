import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {HeaderName} from "../interfaces/header-name";
import {Habit} from "../interfaces/habit";

@Injectable({
  providedIn: 'root'
})
export class HabitService {
  private apiServerUrl = environment.apiBaseUrlHabit;

  constructor(private http: HttpClient) { }

  getAllHabits():Observable<Habit[]>{
    return this.http.get<Habit[]>(`${this.apiServerUrl}/all`)
  }


  getAllHeaderNAmes():Observable<HeaderName[]>{
    return this.http.get<HeaderName[]>(`${this.apiServerUrl}/headerNames`)
  }

  // addNewHabit():Observable<>


  saveAndEditHabit(item: Habit) {
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };
    console.log(item)
    return this.http.post<Habit>(`${this.apiServerUrl}/save`, item, options)
  }
}
