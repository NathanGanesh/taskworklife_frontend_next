import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from "@angular/material/tree";
import {FlatTreeControl} from "@angular/cdk/tree";
import {OkrItem} from "../../shared/interfaces/okr/okr-item";
import {OkrObjective} from "../../shared/interfaces/okr/okr-objective";
import {OkrStatus} from "../../shared/interfaces/okr/okr-status";
import {OkrPriority} from "../../shared/interfaces/okr/okr-priority";
import {MatDialog} from "@angular/material/dialog";
import {OkrDialogAddComponent} from "../okr-dialog-add/okr-dialog-add.component";
import {Book} from "../../shared/interfaces/book";


@Component({
  selector: 'app-okrlist',
  templateUrl: './okrlist.component.html',
  styleUrls: ['./okrlist.component.css']
})
export class OkrlistComponent implements OnInit {
  @Output() addOkrObjective = new EventEmitter<OkrObjective>();
  @Output() deleteOkr = new EventEmitter<OkrObjective>();

  constructor(public dialog: MatDialog,) {
  }

  @Input()
  okrItems: OkrItem[] = []
  currentlyOpenedItemIndex = -1;

  setOpened(itemIndex: any) {
    this.currentlyOpenedItemIndex = itemIndex;
  }

  setClosed(itemIndex: any) {
    if (this.currentlyOpenedItemIndex === itemIndex) {
      // this.currentlyOpenedItemIndex = -1;
    }
  }

  ngOnInit(): void {
    console.log(this.okrItems)
  }

  formatToDate(startDate: Date, endDate: Date): string {
    let startDateFormatted = new Date(startDate).toLocaleDateString('default', {month: 'short', day: '2-digit'});
    let endDateFormatted = new Date(endDate).toLocaleDateString('default', {month: 'short', day: '2-digit'});

    if (startDateFormatted.split(" ")[1] == endDateFormatted.split(" ")[1]) {
      return startDateFormatted +  " - " + endDateFormatted.split(" ")[0]
    }
    return startDateFormatted + " - " + endDateFormatted;
  }

  addNewOkrObjective(i: OkrItem) {
    const dialogRef = this.dialog.open(OkrDialogAddComponent, {data: i.id})
    dialogRef.afterClosed().subscribe((res) => {
      this.addOkrObjective.emit(res);
    })
  }

  deleteOkrEmitter(id:any){
    this.deleteOkr.emit(id);
  }
}
