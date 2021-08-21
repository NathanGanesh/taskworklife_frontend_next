import {Component, Inject, OnInit} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef
} from "@angular/material/dialog";
import {last} from "rxjs/operators";


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {
  newBookNote: string = "";
  booleanError: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave(id: number, lastPage: number): void {
    console.log(lastPage)
    console.log(parseInt(this.newBookNote))
    //check if its not an empty value
    //check if value is not a string
    if (!isNaN(parseInt(this.newBookNote))) {
      this.booleanError = true;
      if (lastPage < parseInt(this.newBookNote)) {
        let data = {
          id,
          pageNumber: this.newBookNote
        }
        this.booleanError = false;
        this.dialogRef.close(data);
      } else {
        this.booleanError = true;
      }
    } else {
      this.booleanError = true;
    }
  }

}
