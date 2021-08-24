import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-folder-item-dialog',
  templateUrl: './folder-item-dialog.component.html',
  styleUrls: ['./folder-item-dialog.component.css']
})
export class FolderItemDialogComponent implements OnInit {
  folderTaskTitle: string = "";
  priority: string[] = ["HIGH", "MEDIUM", "LOW", "NO_PRIORITY"]
  status: string[] = ["DONE", "WORKING_ON_IT", "STRUGGLING", "STUCK"];
  date: string = "";
  statusItem: string = "";
  priorityItem: string = "";

  constructor(public dialogRef: MatDialogRef<FolderItemDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
  }

  onSave() {
    let data = {
      id:this.data.id,
      folderTitle: this.folderTaskTitle,
      date: this.date,
      status: this.statusItem,
      priority: this.priorityItem
    }
    this.dialogRef.close(data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
