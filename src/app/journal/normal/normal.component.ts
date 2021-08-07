import { Component, OnInit } from '@angular/core';
import {interval} from "rxjs";
import {AngularEditorConfig} from "@kolkov/angular-editor";

@Component({
  selector: 'app-normal',
  templateUrl: './normal.component.html',
  styleUrls: ['./normal.component.css']
})
export class NormalComponent implements OnInit {
  currentDate:string = new Date().toLocaleString('en-US', { timeZone: 'Europe/Amsterdam' });
title:string = "";
  htmlContent = '';
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
  }

  constructor() {
    interval(1000).pipe().subscribe((x) =>{
      this.currentDate = new Date().toLocaleString('en-US', { timeZone: 'Europe/Amsterdam' });
    });
  }

  ngOnInit(): void {
  }

}
