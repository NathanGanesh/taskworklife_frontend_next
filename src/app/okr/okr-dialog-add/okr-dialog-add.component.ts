import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogOverviewExampleDialog} from "../../dialog-overview/dialog-overview.component";
import {FormControl, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {SelectedItem} from "../../shared/interfaces/selected-item";
import {OkrItem} from "../../shared/interfaces/okr/okr-item";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-okr-dialog-add',
  templateUrl: './okr-dialog-add.component.html',
  styleUrls: ['./okr-dialog-add.component.css']
})
export class OkrDialogAddComponent implements OnInit {
  title: string = "";
  status: string = "";
  // @ts-ignore
  okrDialog: FormGroup;


  selectedItemsPriority: SelectedItem[] = [
    {value: "HIGH", viewValue: 'High'},
    {value: "MEDIUM", viewValue: 'Medium'},
    {value: "LOW", viewValue: "Low"},
    {value: "NO_PRIORITY", viewValue: "No priority"},
  ];

  selectedItemsStatus: SelectedItem[] = [
    {value: "DONE", viewValue: 'Done'},
    {value: "WORKING_ON_IT", viewValue: 'Working on it'},
    {value:"STRUGGLING", viewValue:"Struggling"},
    {value:"STUCK", viewValue:"Stuck"},
  ];



  // @ts-ignore
  @ViewChild('myForm') formGroupDirective: FormGroupDirective;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    this.okrDialog = new FormGroup({
      title:new FormControl('', [Validators.required, Validators.minLength(3)]),
      okrPriority: new FormControl("", [Validators.required, ]),
      okrStatus: new FormControl("", [Validators.required, ]),
      startDate: new FormControl('', ),
      endDate: new FormControl(''),
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    let dataSaveObj = {
      okrDialog:this.okrDialog.value,
      okrObject:this.data
    }
    this.dialogRef.close(dataSaveObj)
  }

}
