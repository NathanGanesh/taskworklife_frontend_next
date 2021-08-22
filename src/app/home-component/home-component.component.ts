import {Component, OnInit} from '@angular/core';
import {NavItem} from "../shared/interfaces/nav-item";
import {ButtonItem} from "../shared/interfaces/button-item";
import {SelectedItem} from "../shared/interfaces/selected-item";
import {IconItems} from "../shared/interfaces/icon-items";

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  sidenavWidth = 4;
  iconItems: IconItems[] = [
    {
      title: "Task", iconName: 'fact_check', routingLink: "task"
    },
    {
      title: "Book", iconName: 'book', routingLink: "book"
    },
    {
      title: "Journal", iconName: "description", routingLink: "journal"
    },
    {
      title: "Habit", iconName: "loop", routingLink: "habit"
    },
    {
      title: "OKR", iconName: "timeline", routingLink: "goal"
    },
    {title: "Note", iconName: "note", routingLink:"note"}
  ];


  constructor() {

  }

  ngOnInit() {

  }


  increase() {
    this.sidenavWidth = 15;
    console.log('increase sidenav width');
  }

  decrease() {
    this.sidenavWidth = 4;
    console.log('decrease sidenav width');
  }
}
