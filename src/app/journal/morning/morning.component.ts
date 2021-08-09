import {Component, Input, OnInit} from '@angular/core';
import {interval} from "rxjs";
import {map} from "rxjs/operators";
import {JournalMorning} from "../../shared/interfaces/journal-morning";
import {JournalListItem} from "../../shared/interfaces/journal-list-item";
import {JournalService} from "../../shared/services/journal.service";

@Component({
  selector: 'app-morning',
  templateUrl: './morning.component.html',
  styleUrls: ['./morning.component.css']
})
export class MorningComponent implements OnInit {
  @Input()
    //@ts-ignore
  selectedItem: JournalListItem

  majorTasks: string = " - eating";
  coreGoals: string = " gym ";
  scheduleToday: string = "code - 12:00 math - 6:00";
  distractionsTimeWaster: string = "fpapping";
  toAvoid: string = "eating gomad";
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
    console.log(this.selectedItem)
  }

  onSubmitMorning(e: any) {
    this.journalService.submitMorning(e).subscribe();
    console.log(e)
  }
}
