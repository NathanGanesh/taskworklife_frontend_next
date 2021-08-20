import {Folder} from "./folder";

export class GroupItem {
  groupName:string;
  id:number;
  folders:Folder[]

  constructor(groupName: string, id: number, folders: Folder[]) {
    this.groupName = groupName;
    this.id = id;
    this.folders = folders;
  }
}
