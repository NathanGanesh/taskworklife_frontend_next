import {Component, OnInit} from '@angular/core';
import {interval} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-morning',
  templateUrl: './morning.component.html',
  styleUrls: ['./morning.component.css']
})
export class MorningComponent implements OnInit {

  majorTasks: string = " - eating";
  coreGoals: string = " gym ";
  scheduleToday: string = "code - 12:00 math - 6:00";
  distractionsTimeWaster: string = "fpapping";
  toAvoid: string = "eating gomad";
  currentDate:string = new Date().toLocaleString('en-US', { timeZone: 'Europe/Amsterdam' });
  // currentDate: string =new Date().toLocaleString("en-US", {timeZone: "GMT+0200"})


  constructor() {
    interval(1000).pipe().subscribe((x) =>{
        this.currentDate = new Date().toLocaleString('en-US', { timeZone: 'Europe/Amsterdam' });
    });
  }

  ngOnInit(): void {
  }

  onSubmitMorning(e:any){
    console.log(e)
  }
}
