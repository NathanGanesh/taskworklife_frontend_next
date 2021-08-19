import {Component, OnInit, ViewChild} from '@angular/core';
import {SelectedItem} from "../../shared/interfaces/selected-item";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatSelectChange} from "@angular/material/select";
import {HabitService} from "../../shared/services/habit.service";
import {Book} from "../../shared/interfaces/book";
import {HttpErrorResponse} from "@angular/common/http";
import {Habit} from "../../shared/interfaces/habit";
import {HeaderName} from "../../shared/interfaces/header-name";
import {HabitEntry} from "../../shared/interfaces/habit-entry";

export interface MonthWithDays {
  monthName: string;
  amountOfDays: number;
}

export interface Item {
  date: string;
  checked: boolean;
  journal: boolean;
}

const data = [
  {date: new Date().toDateString(), checked: false, journal: true},
  {date: new Date().toDateString(), checked: true, journal: true},
]

// January

@Component({
  selector: 'app-habit-home',
  templateUrl: './habit-home.component.html',
  styleUrls: ['./habit-home.component.css']
})
export class HabitHomeComponent implements OnInit {
  dataHabit: Habit[] = [];
  tryHabit2: any[] = []

  constructor(private habitService: HabitService) {
  }

  dataSource = new MatTableDataSource<Item>(data);


// @ts-ignore
  @ViewChild('paginator1') paginator1: MatPaginator;
  dateMonth: string = "";

  dateWithAmountOfDays: MonthWithDays[] = [
    {monthName: "January", amountOfDays: 31},
    {monthName: "February", amountOfDays: 28},
    {monthName: "March", amountOfDays: 31},
    {monthName: "April ", amountOfDays: 30},
    {monthName: "May", amountOfDays: 31},
    {monthName: "June", amountOfDays: 30},
    {monthName: "July", amountOfDays: 31},
    {monthName: "August", amountOfDays: 31},
    {monthName: "September", amountOfDays: 30},
    {monthName: "October", amountOfDays: 31},
    {monthName: "November", amountOfDays: 30},
    {monthName: "December", amountOfDays: 31},
  ];
  displayedColumns2: string[] = []
  displayedColumns: string[] = ['journal', "weight_track", "wakatime", "no_fap", "book", "daily_goals"]
  pageNumber: any;

  goToPage() {
    this.paginator1.pageIndex = this.pageNumber, // number of the page you want to jump.
      this.paginator1.page.next({
        pageIndex: this.pageNumber,
        pageSize: this.paginator1.pageSize,
        length: this.paginator1.length
      });
  }


  ngOnInit(): void {
    this.handleHabits();
    this.handleHeaderNames();
  }

  onSelectChange($event: MatSelectChange) {

    console.log($event.value)
  }


  handleHabits() {
    this.habitService.getAllHabits().subscribe(
      (response: Habit[]) => {
        this.dataHabit = response;
        this.tryHabit2 = this.flattenArray(response)
        // console.log(this.flattenArray(response));;
        // console.log(this.dataHabit)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  handleHeaderNames() {
    this.habitService.getAllHeaderNAmes().subscribe(
      (response: HeaderName[]) => {
        this.displayedColumns2.push("date")
        this.displayedColumns2.push("Journal")
        this.displayedColumns2.push("Wakatime")
        // response.map((item) => {
        //   this.displayedColumns2.push(item.headerName);
        // })
        // console.log(this.displayedColumns2)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  flattenArray(obj: any[]) {
    let flattenedObject: any[] = [];
// console.log(obj);
    obj.forEach((item: any) => {
        var obj: any = {"date": item.date};
        item.habitEntryList.forEach((habitEntryItem: any) => {
          var key = habitEntryItem.name;
          obj[key] = habitEntryItem.checked
        })
        flattenedObject.push(obj)
      }
    )
    console.log(flattenedObject)
    return flattenedObject;
  }

  getObjectKey(item:any){
    console.log(item)
  }


}
