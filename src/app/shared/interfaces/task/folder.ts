import {FolderItem} from "./folder-item";

export class Folder {
  id:number;
  name:string;
  tasks:FolderItem[];

  constructor(id: number, name: string, tasks: FolderItem[]) {
    this.id = id;
    this.name = name;
    this.tasks = tasks;
  }
}
