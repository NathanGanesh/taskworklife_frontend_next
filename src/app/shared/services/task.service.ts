import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Book} from "../interfaces/book";
import {GroupItem} from "../interfaces/task/group-item";
import {TaskAddToFolder} from "../interfaces/task/TaskAddToFolder";
import {Folder} from "../interfaces/task/folder";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiServerGroupUrl = environment.apiBaseUrlGroup;
  private apiServerFolderUrl = environment.apiBaseUrlFolder;

  constructor(private http: HttpClient) {

  }

  getAllGroups(): Observable<GroupItem[]>{
    return  this.http.get<GroupItem[]>(`${this.apiServerGroupUrl}/all`)
  }

  addNewFolderToGroup(res: any) {
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };
    console.log(res)
    return this.http.post(`${this.apiServerGroupUrl}/add/${res.id}`, res.folderTitle, options)
  }

  getGroupById(id: number) :Observable<GroupItem>{
    return  this.http.get<GroupItem>(`${this.apiServerGroupUrl}/${id}`)
  }

  addNewTaskItemToFolder(res: TaskAddToFolder) {
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };
    return this.http.post(`${this.apiServerFolderUrl}/add/${res.id}`, res, options)
  }


  getFolderById(id: number) {
    return  this.http.get<Folder>(`${this.apiServerFolderUrl}/${id}`)
  }

  deleteFolderById(id:number){
    return this.http.delete(`${this.apiServerFolderUrl}/delete/${id}`)
  }
}
