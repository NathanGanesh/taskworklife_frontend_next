import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-edit-folder',
  templateUrl: './edit-folder.component.html',
  styleUrls: ['./edit-folder.component.css']
})
export class EditFolderComponent implements OnInit {
  folderTitle: string = "";
  constructor(public dialogRef: MatDialogRef<EditFolderComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.folderTitle = this.data.title;
  }

  onSave() {
    if (this.folderTitle === "") {
      this.dialogRef.close()
    }else{
      let data = {
        name:this.folderTitle,
        id:this.data.id
      }
      this.dialogRef.close(data);
    }
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
