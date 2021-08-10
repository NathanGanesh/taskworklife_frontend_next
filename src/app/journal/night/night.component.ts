import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {interval} from "rxjs";
import {JournalListItem} from "../../shared/interfaces/journal-list-item";
import {JournalMorning} from "../../shared/interfaces/journal-morning";
import {JournalNight} from "../../shared/interfaces/journal-night";
import {FormGroupDirective} from "@angular/forms";
import {JournalService} from "../../shared/services/journal.service";
import {JournalType} from "../../shared/interfaces/journal-type";

@Component({
  selector: 'app-night',
  templateUrl: './night.component.html',
  styleUrls: ['./night.component.css']
})
export class NightComponent implements OnInit {
  @Input()
    //@ts-ignore
  selectedItem: JournalListItem
  //@ts-ignore
  @ViewChild('nightForm') formGroupDirective: FormGroupDirective;
  currentDate:string = new Date().toLocaleString('en-US', { timeZone: 'Europe/Amsterdam' });
  doneToday: string = "";
  coreGoals: string = "";
  distractions: string = "";
  habitsImprovement: string = "";
  toAvoid: string = "";
  planTomorrow : string = "";

  constructor(private journalService: JournalService) {
    interval(1000).pipe().subscribe((x) =>{
      this.currentDate = new Date().toLocaleString('en-US', { timeZone: 'Europe/Amsterdam' });
    });
  }

  ngOnInit(): void {
    if (this.selectedItem !== undefined) {
      this.doneToday = <string>this.selectedItem.thingsDone;
      this.coreGoals = <string>this.selectedItem.coreGoals;
      this.distractions = <string>this.selectedItem.distractions;
      this.habitsImprovement = <string>this.selectedItem.habit;
      this.toAvoid = <string>this.selectedItem.avoid;
      this.planTomorrow = <string>this.selectedItem.planTomorrow;
    }
  }

  onSubmitNight(e:any){
    let reqObject: JournalNight;
    if (this.selectedItem!==undefined){
      reqObject = <JournalNight>{
        id:this.selectedItem.id,
        thingsDone:this.doneToday,
        coreGoals:this.coreGoals,
        distractions:this.distractions,
        habit:this.habitsImprovement,
        avoid:this.toAvoid,
        planTomorrow:this.planTomorrow,
        journalType: JournalType.NIGHT
      }
    }else {
      reqObject = <JournalNight>{
        thingsDone:this.doneToday,
        coreGoals:this.coreGoals,
        distractions:this.distractions,
        habit:this.habitsImprovement,
        avoid:this.toAvoid,
        planTomorrow:this.planTomorrow,
        journalType: JournalType.NIGHT
      }
    }
    this.journalService.submitNight(reqObject).subscribe();
    setTimeout(() => this.formGroupDirective.resetForm(), 0)
  }
}
