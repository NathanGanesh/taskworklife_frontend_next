import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {SelectedItem} from "../../shared/interfaces/selected-item";
import {OkrItem} from "../../shared/interfaces/okr/okr-item";
import {tap} from "rxjs/operators";
import {OkrServiceService} from "../../shared/services/okr-service.service";

@Component({
  selector: 'app-okrcreate',
  templateUrl: './okrcreate.component.html',
  styleUrls: ['./okrcreate.component.css']
})
export class OkrcreateComponent implements OnInit {
  title: string = "";
  status: string = "";
  // @ts-ignore
  okrDialog: FormGroup;
  // @ts-ignore
  @ViewChild('myForm') formGroupDirective: FormGroupDirective;

  // HIGH,MEDIUM,LOW,NO_PRIORITY
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

  constructor(private OkrService: OkrServiceService) { }

  ngOnInit(): void {
    this.okrDialog = new FormGroup({
      okrTitle:new FormControl('', [Validators.required, Validators.minLength(3)]),
      priority: new FormControl("", [Validators.required, ]),
      okrStatus: new FormControl("", [Validators.required, ]),
      startDateOkr: new FormControl('', [Validators.required, ]),
      endDateOkr: new FormControl('', [Validators.required, ]),
    })
  }


  onSubmitOkCreate(){
    console.log(this.okrDialog.value)
    this.OkrService.addOkr(this.okrDialog.value).subscribe();
    setTimeout(() => this.formGroupDirective.resetForm(), 0)
  }

}
