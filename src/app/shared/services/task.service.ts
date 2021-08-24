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
  private apiServerTaskUrl = environment.apiBaseUrlTask;

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

  deleteTaskById(folderId:number, taskId:number): Observable<Object>{
    return this.http.delete(`${this.apiServerFolderUrl}/delete/${folderId}/task/${taskId}`)
  }

  getFolderById(id: number) {
    return  this.http.get<Folder>(`${this.apiServerFolderUrl}/${id}`)
  }

  deleteFolderById(groupId:number, folderId:number): Observable<Object>{
    return this.http.delete(`${this.apiServerGroupUrl}/delete/${groupId}/folder/${folderId}`)
  }

  addNewGroup(res: string) {
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };

    return this.http.post(`${this.apiServerGroupUrl}/add`, res,options)
  }

  deleteGroupById(id: number) {
    return this.http.delete(`${this.apiServerGroupUrl}/delete/${id}`)
  }

  editNewGroup(res: any) {
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };
    console.log(res)
    return this.http.post(`${this.apiServerGroupUrl}/edit/${res.id}`, res.groupName,options)
  }

  editTaskItemFromFolder(el:any) {
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };
    console.log(el)
    return this.http.post(`${this.apiServerTaskUrl}/edit`,el,options)
  }

  editFolder(res:{id:number, name:string}) {
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };
    console.log(res, "ok")
    return this.http.post(`${this.apiServerFolderUrl}/edit/${res.id}`,res.name,options)
  }
}
