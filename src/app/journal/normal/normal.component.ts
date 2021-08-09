import {Component, Input, OnInit} from '@angular/core';
import {interval} from "rxjs";
import {AngularEditorConfig} from "@kolkov/angular-editor";
import {JournalListItem} from "../../shared/interfaces/journal-list-item";

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

  constructor() {
    interval(1000).pipe().subscribe((x) => {
      this.currentDate = new Date().toLocaleString('en-US', {timeZone: 'Europe/Amsterdam'});
    });
  }

  ngOnInit(): void {

  }

}
