import {Component, Input, OnInit} from '@angular/core';
import {interval} from "rxjs";
import {JournalListItem} from "../../shared/interfaces/journal-list-item";

@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.component.html',
  styleUrls: ['./weekly.component.css']
})
export class WeeklyComponent implements OnInit {
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
  planTomorrow :string = ""

  constructor() {
    interval(1000).pipe().subscribe((x) =>{
      this.currentDate = new Date().toLocaleString('en-US', { timeZone: 'Europe/Amsterdam' });
    });
  }

  ngOnInit(): void {
    if (this.selectedItem!==undefined){
      // this.goalsThisWeek = this.selectedItem.areaFocus;
      // this.success = <string>this.selectedItem.successThisWeek;
      // this.weekDifferent = <string>this.selectedItem.doThingsDifferent;
      // this.frustrating = this.selectedItem.frustrating;
      // this.wasteTime = this.selectedItem.wasteTime;
      // this.planNextWeek = this.selectedItem.plan;
      // this.planTomorrow = this.selectedItem.planTomorrow;
    }

  }
  onSubmitWeekly(e:any){

  }

}
