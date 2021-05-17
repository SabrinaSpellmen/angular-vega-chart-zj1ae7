import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { range, random } from 'lodash';

import { lineChart, Point2D } from './chart';

const values: Point2D[][] = range(1202).map(x => [{ x, y: x + random(50) }, { x, y: x + random(50) }]);
const series: string[] = ['thing1', 'thing2'];

window.addEventListener('resize', event => console.warn('RESIZE:L', event));

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit  {
  @ViewChild('graph') graph: ElementRef;
  ngAfterViewInit() {
    lineChart(this.graph.nativeElement, { values, series });
  }
}
