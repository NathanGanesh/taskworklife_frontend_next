import {Component, Input, OnInit,} from '@angular/core';
import {ChartDataSets, ChartOptions} from 'chart.js';
import {Color, Label} from 'ng2-charts';
import {Book} from "../../shared/interfaces/book";
import {BookNote} from "../../shared/interfaces/book-note";

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit{
  @Input() bookNoteArraylist: BookNote[] | undefined = [];
  labels:number[] =[];
  dataPages:number[] =[];

  ngOnInit(): void {
   this.bookNoteArraylist?.forEach((item) =>{
     this.labels.push(item.id);
     this.dataPages.push(item.pageNumber);
   })
  }


  data = {
    labels: this.labels,
    datasets: [
      {
       label:false,
        data: this.dataPages,
        fill: true,
        backgroundColor: "rgba(54,162,235,0.7)"
      },

    ]
  };

  options = {
    legend: {
      display: false
    },
    maintainAspectRatio: true,
    scales: {
      yAxes: [
        {
          position: "left"
        }
      ]
    }
  };
}
