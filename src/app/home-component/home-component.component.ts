import { Component, OnInit } from '@angular/core';
import {NavItem} from "../shared/interfaces/nav-item";

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  sidenavWidth = 4;
  ngStyle: string = "";
  constructor() {

  }

  ngOnInit() {

  }
  // menu:NavItem[] = [
  //   {
  //     "displayName":"inbox",
  //
  //   }
  // ]

  increase() {
    this.sidenavWidth = 15;
    console.log('increase sidenav width');
  }
  decrease() {
    this.sidenavWidth = 4;
    console.log('decrease sidenav width');
  }
}
