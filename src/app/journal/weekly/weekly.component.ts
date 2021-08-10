import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {interval} from "rxjs";
import {JournalListItem} from "../../shared/interfaces/journal-list-item";
import {FormGroupDirective} from "@angular/forms";
import {JournalWeekly} from "../../shared/interfaces/journal-weekly";
import {JournalNight} from "../../shared/interfaces/journal-night";
import {JournalType} from "../../shared/interfaces/journal-type";
import {JournalService} from "../../shared/services/journal.service";

@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.component.html',
  styleUrls: ['./weekly.component.css']
})
export class WeeklyComponent implements OnInit {
  //@ts-ignore
  @ViewChild('weeklyForm') formGroupDirective: FormGroupDirective;
  @Input()
    //@ts-ignore
  selectedItem: JournalListItem
  currentDate:string = new Date().toLocaleString('en-US', { timeZone: 'Europe/Amsterdam' });
  goalsThisWeek:string = ''
  success: string = '';
  weekDifferent: string = "";
  frustrating: string = "";
  wasteTime:string = "";
  planNextWeek: string = "";
  priority :string = ""

  constructor(private journalService: JournalService) {
    interval(1000).pipe().subscribe((x) =>{
      this.currentDate = new Date().toLocaleString('en-US', { timeZone: 'Europe/Amsterdam' });
    });
  }

  ngOnInit(): void {
    if (this.selectedItem!==undefined){
      this.goalsThisWeek = <string>this.selectedItem.areaFocus;
      this.success = <string>this.selectedItem.successThisWeek;
      this.weekDifferent = <string>this.selectedItem.doThingsDifferent;
      this.frustrating = <string>this.selectedItem.frustrating;
      this.wasteTime = <string>this.selectedItem.wasteTime;
      this.planNextWeek = <string>this.selectedItem.areaFocus;
      this.priority = <string>this.selectedItem.priority;
    }
  }
  onSubmitWeekly(e:any){
  let reqObject:JournalWeekly;
    if (this.selectedItem!==undefined){
      reqObject = <JournalWeekly>{
        id:this.selectedItem.id,
        progressThisWeek:this.priority,
        successThisWeek:this.success,
        doThingsDifferent:this.weekDifferent,
        frustrating:this.frustrating,
        wasteTime:this.wasteTime,
        areaFocus:this.planNextWeek,
        priority:this.priority,
        journalType: JournalType.WEEKLY
      }
    }else{
      reqObject = <JournalWeekly>{
        progressThisWeek:this.priority,
        successThisWeek:this.success,
        doThingsDifferent:this.weekDifferent,
        frustrating:this.frustrating,
        wasteTime:this.wasteTime,
        areaFocus:this.planNextWeek,
        priority:this.priority,
        journalType: JournalType.WEEKLY
      }
    }
    this.journalService.submitWeekly(reqObject).subscribe();
    setTimeout(() => this.formGroupDirective.resetForm(), 0)
  }

}
