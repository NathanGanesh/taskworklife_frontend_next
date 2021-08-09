import {Component, OnInit} from '@angular/core';
import {SelectedItem} from "../../shared/interfaces/selected-item";
import {ButtonItem} from "../../shared/interfaces/button-item";
import {AngularEditorConfig} from "@kolkov/angular-editor";
import {Journal} from "../../shared/interfaces/journal";
import {JournalService} from "../../shared/services/journal.service";
import {Book} from "../../shared/interfaces/book";
import {HttpErrorResponse} from "@angular/common/http";
import {JournalListItem} from "../../shared/interfaces/journal-list-item";

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {
  selectedType: string = ""
  //@ts-ignore
  selectedItem:JournalListItem;
  selectedEditType:string = "";
  journals$: JournalListItem[] = [];

  buttonsItems: ButtonItem[] = [
    {iconName: "list_alt", value: "MORNING", viewValue: 'Morning journal'},
    {iconName: "dark_mode", value: "NIGHT", viewValue: 'Night journal'},
    {iconName: "calendar_view_week", value: "WEEKLY", viewValue: "Weekly journal"},
    {iconName: "calendar_view_day", value: "JOURNAL", viewValue: "Journal"},
  ];

  constructor(private journalService: JournalService) {
  }

  ngOnInit(): void {
    this.handleJournalList()
  }


  onSwitchComponent($event: any) {
    this.selectedEditType ="";
    this.selectedType = $event.currentTarget.value
  }

  handleJournalList() {
    this.journalService.getAllJournals().subscribe((resp: JournalListItem[]) => {
        console.log(resp)
        this.journals$ = resp;
        console.log(this.journals$)
        // console.log(this.journals$)
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      })
  }


  onJournalClick($item: JournalListItem) {
    this.selectedType ="";
    this.selectedEditType = $item.journalType.toString();
    this.selectedItem = $item;
  }
}
