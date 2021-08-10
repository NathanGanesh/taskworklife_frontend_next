import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {interval} from "rxjs";
import {JournalMorning} from "../../shared/interfaces/journal-morning";
import {JournalListItem} from "../../shared/interfaces/journal-list-item";
import {JournalService} from "../../shared/services/journal.service";
import {JournalType} from "../../shared/interfaces/journal-type";
import {FormGroupDirective} from "@angular/forms";

@Component({
  selector: 'app-morning',
  templateUrl: './morning.component.html',
  styleUrls: ['./morning.component.css']
})
export class MorningComponent implements OnInit {
  @Input()
    //@ts-ignore
  selectedItem: JournalListItem
  // @ts-ignore
  @ViewChild('morningForm') formGroupDirective: FormGroupDirective;
  majorTasks: string = "";
  coreGoals: string = "";
  scheduleToday: string = "";
  distractionsTimeWaster: string = "";
  toAvoid: string = "";
  currentDate: string = new Date().toLocaleString('en-US', {timeZone: 'Europe/Amsterdam'});

  // currentDate: string =new Date().toLocaleString("en-US", {timeZone: "GMT+0200"})


  constructor(private journalService: JournalService) {
    interval(1000).pipe().subscribe((x) => {
      this.currentDate = new Date().toLocaleString('en-US', {timeZone: 'Europe/Amsterdam'});
    });
  }

  ngOnInit(): void {
    if (this.selectedItem !== undefined) {
      this.majorTasks = <string>this.selectedItem.majorTasks;
      this.coreGoals = <string>this.selectedItem.coreGoals;
      this.distractionsTimeWaster = <string>this.selectedItem.distractions;
      this.toAvoid = <string>this.selectedItem.oneThingToAvoid;
      this.scheduleToday = <string>this.selectedItem.scheduleToday;
    }
  }

  onSubmitMorning() {

    let reqObject: JournalMorning;
    if (this.selectedItem !== undefined) {
      reqObject = <JournalMorning>{
        id: this.selectedItem.id,
        majorTasks: this.majorTasks,
        coreGoals: this.coreGoals,
        distractions: this.distractionsTimeWaster,
        oneThingToAvoid: this.toAvoid,
        scheduleToday: this.scheduleToday,
        journalType: JournalType.MORNING
      }
    } else {
      reqObject = <JournalMorning>{
        majorTasks: this.majorTasks,
        coreGoals: this.coreGoals,
        distractions: this.distractionsTimeWaster,
        oneThingToAvoid: this.toAvoid,
        scheduleToday: this.scheduleToday,
        journalType: JournalType.MORNING
      };
    }
    this.journalService.submitMorning(reqObject).subscribe();
    setTimeout(() => this.formGroupDirective.resetForm(), 0)
  }
}
