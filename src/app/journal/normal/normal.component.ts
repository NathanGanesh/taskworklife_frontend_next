import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {interval} from "rxjs";
import {AngularEditorConfig} from "@kolkov/angular-editor";
import {JournalListItem} from "../../shared/interfaces/journal-list-item";
import {JournalService} from "../../shared/services/journal.service";
import {JournalNormal} from "../../shared/interfaces/journal-normal";
import {JournalType} from "../../shared/interfaces/journal-type";
import {FormGroupDirective} from "@angular/forms";

@Component({
  selector: 'app-normal',
  templateUrl: './normal.component.html',
  styleUrls: ['./normal.component.css']
})
export class NormalComponent implements OnInit {
  currentDate: string = new Date().toLocaleString('en-US', {timeZone: 'Europe/Amsterdam'});
  title: string = "";
  htmlContent = '';
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
  }
  @Input()
    //@ts-ignore
  selectedItem: JournalListItem


  constructor(private journalService: JournalService) {
    interval(1000).pipe().subscribe((x) => {
      this.currentDate = new Date().toLocaleString('en-US', {timeZone: 'Europe/Amsterdam'});
    });
  }

  ngOnInit(): void {

    if (this.selectedItem !== undefined) {
      this.htmlContent = <string>this.selectedItem.text;
      this.title = this.selectedItem.title;
    }
  }

  onSubmitJournal() {
    let reqObject: JournalNormal;
    console.log(this.selectedItem)
    if (this.selectedItem !== undefined) {
      reqObject = <JournalNormal>{
        id: this.selectedItem.id,
        journalType: JournalType.JOURNAL,
        title: this.title,
        text: this.htmlContent
      }
    } else {
      reqObject = <JournalNormal>{
        journalType: JournalType.JOURNAL,
        title: this.title,
        text: this.htmlContent
      }
    }
    this.journalService.submitNormalJournal(reqObject).subscribe();
    this.title = ""
    this.htmlContent = ""
  }


}
