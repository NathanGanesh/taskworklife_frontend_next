import { Component, OnInit } from '@angular/core';
import {OkrServiceService} from "../../shared/services/okr-service.service";
import {OkrItem} from "../../shared/interfaces/okr/okr-item";
import {JournalListItem} from "../../shared/interfaces/journal-list-item";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-okr',
  templateUrl: './okr.component.html',
  styleUrls: ['./okr.component.css']
})
export class OkrComponent implements OnInit {
  okrItems: OkrItem[] = [];
  constructor(private OkrService:OkrServiceService) { }

  ngOnInit(): void {
    this.OkrService.getAllOkrs().subscribe((resp:OkrItem[]) =>{
      this.okrItems = resp;
      console.log(resp)
    },(error: HttpErrorResponse) => {
      alert(error.message)
    } )
  }

}
