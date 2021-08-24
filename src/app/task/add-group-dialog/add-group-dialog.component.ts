import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-group-dialog',
  templateUrl: './add-group-dialog.component.html',
  styleUrls: ['./add-group-dialog.component.css']
})
export class AddGroupDialogComponent implements OnInit {
  groupName: string = "";
  edit: boolean = false;

  constructor(public dialogRef: MatDialogRef<AddGroupDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    console.log(this.data)
    if (this.data != null) {
      if (this.data.groupName !== undefined) {
        this.groupName = this.data.groupName;
        this.edit = true;
      }
    }
  }

  onSave() {
    if (!this.edit) {
      this.dialogRef.close(this.groupName);
    } else {
      let data = {
        groupName: this.groupName,
        id: this.data.id
      }
      this.dialogRef.close(data)
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
