import {NgModule,Component,ElementRef,AfterViewInit,OnDestroy,Input,Output,EventEmitter} from '@angular/core';
import {CommonModule} from '@angular/common';

import 'chart.js';

declare var Chart: any;

@Component({
  selector: 'my-p-chart',
  template: `
        <div style="position:relative" [style.width]="width" [style.height]="height">
            <canvas [attr.width]="width" [attr.height]="height" (click)="onCanvasClick($event)"></canvas>
        </div>
    `
})
export class MyUIChart implements AfterViewInit, OnDestroy {

  @Input() type: string = "";

  @Input() options: any = {};

  @Input() width: string = "";

  @Input() height: string = "";

  @Input() responsive: boolean = true;

  @Output() onDataSelect: EventEmitter<any> = new EventEmitter();

  initialized: boolean = false;

  _data: any;

  chart: any;

  constructor(public el: ElementRef) {}

  @Input() get data(): any {
    return this._data;
  }

  set data(val:any) {
    this._data = val;
    this.reinit();
  }

  ngAfterViewInit() {
    this.initChart();
    this.initialized = true;
  }

  onCanvasClick(event: any) {
    if(this.chart) {
      let element = this.chart.getElementAtEvent(event);
      let dataset = this.chart.getDatasetAtEvent(event);
      if(element&&element[0]&&dataset) {
        this.onDataSelect.emit({originalEvent: event, element: element[0], dataset: dataset});
      }
    }
  }

  initChart() {
    let opts = this.options||{};
    opts.responsive = this.responsive;

    this.chart = new Chart(this.el.nativeElement.children[0].children[0], {
      type: this.type,
      data: this.data,
      options: this.options
    });
  }

  getCanvas() {
    return this.el.nativeElement.children[0].children[0];
  }

  getBase64Image() {
    return this.chart.toBase64Image();
  }

  generateLegend() {
    if(this.chart) {
      this.chart.generateLegend();
    }
  }

  refresh() {
    if(this.chart) {
      this.chart.update();
    }
  }

  reinit() {
    if(this.chart) {
      this.chart.destroy();
      this.initChart();
    }
  }

  ngOnDestroy() {
    if(this.chart) {
      this.chart.destroy();
      this.initialized = false;
      this.chart = null;
    }
  }
}

@NgModule({
  imports: [CommonModule],
  exports: [MyUIChart],
  declarations: [MyUIChart]
})
export class MyChartModule { }
