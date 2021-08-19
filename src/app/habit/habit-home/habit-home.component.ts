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
import {tap} from "rxjs/operators";

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
  tryHabit2: any[] = []

  constructor(private habitService: HabitService) {
  }


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

  displayedColumns: string[] = ["date", 'journal', "weight_track", "wakatime", "no_fap", "book", "daily_goals", "habit_track"]
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

  }

  onSelectChange($event: MatSelectChange) {
    console.log($event.value)
  }


  handleHabits() {
    this.habitService.getAllHabits().subscribe(
      (response: Habit[]) => {
        this.tryHabit2 = response;
        console.log(this.tryHabit2)
        let dailyItem = this.tryHabit2.filter((item) => {
          if (item.date === new Date().toISOString().slice(0,10)){
            return item;
          }
        })
        console.log(dailyItem)
        if (dailyItem.length <= 0) {
          this.insertDailyItem()
        }
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  private insertDailyItem() {
    console.log("inserting dialy")
    let item:Habit = {
      date:new Date()
    }
    this.habitService.saveAndEditHabit(item).subscribe();
  }

  testItem(item:Habit){
    this.habitService.saveAndEditHabit(item).subscribe();
  }

  // flattenArray(obj: any[]) {
  //   let flattenedObject: any[] = [];
  //   obj.forEach((item: any) => {
  //       let obj: any = {"date": item.date, "id":item.id};
  //       item.habitEntryList.forEach((habitEntryItem: any) => {
  //         let key = habitEntryItem.name;
  //         obj[key] = habitEntryItem.checked
  //       })
  //       flattenedObject.push(obj)
  //     }
  //   )
  //   return flattenedObject;
  // }

}
