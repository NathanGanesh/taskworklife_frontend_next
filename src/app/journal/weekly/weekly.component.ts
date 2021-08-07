import { Component, OnInit } from '@angular/core';
import {interval} from "rxjs";

@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.component.html',
  styleUrls: ['./weekly.component.css']
})
export class WeeklyComponent implements OnInit {
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
  }
  onSubmitWeekly(e:any){

  }

}
