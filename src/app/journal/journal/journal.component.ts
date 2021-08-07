import { Component, OnInit } from '@angular/core';
import {SelectedItem} from "../../shared/interfaces/selected-item";
import {ButtonItem} from "../../shared/interfaces/button-item";
import {AngularEditorConfig} from "@kolkov/angular-editor";

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {
  selectedType: string = ""


  buttonsItems: ButtonItem[] = [
    {iconName:"list_alt",value: "MORNING", viewValue: 'Morning journal'},
    {iconName:"dark_mode",value: "NIGHT", viewValue: 'Night journal'},
    {iconName:"calendar_view_week",value: "WEEK", viewValue: "Weekly journal"},
    {iconName:"calendar_view_day",value: "JOURNAL", viewValue: "Journal"},
  ];

  constructor() { }

  ngOnInit(): void {
  }


  onSwitchComponent($event: any){
    this.selectedType = $event.currentTarget.value
    console.log(this.selectedType)
  }


}
