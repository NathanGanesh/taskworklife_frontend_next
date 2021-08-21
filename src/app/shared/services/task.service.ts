import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Book} from "../interfaces/book";
import {GroupItem} from "../interfaces/task/group-item";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiServerUrl = environment.apiBaseUrlGroup;

  constructor(private http: HttpClient) {

  }

  getAllGroups(): Observable<GroupItem[]>{
    return  this.http.get<GroupItem[]>(`${this.apiServerUrl}/all`)
  }

  addNewFolderToGroup(res: any) {

  }
}
