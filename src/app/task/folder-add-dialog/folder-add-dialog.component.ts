import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";


@Component({
  selector: 'app-folder-add-dialog',
  templateUrl: './folder-add-dialog.component.html',
  styleUrls: ['./folder-add-dialog.component.css']
})
export class FolderAddDialogComponent {
  folderTitle: string = "";

  constructor(public dialogRef: MatDialogRef<FolderAddDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  ngOnInit(): void {
    console.log(this.data)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.folderTitle === "") {
      this.dialogRef.close()
    }
    let data = {
      folderTitle: this.folderTitle,
      id: this.data.id
    }

    this.dialogRef.close(data);
  }
}
