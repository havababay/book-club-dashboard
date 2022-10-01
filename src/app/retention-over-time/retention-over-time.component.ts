import { Component, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';

@Component({
  selector: 'app-retention-over-time',
  templateUrl: './retention-over-time.component.html',
  styleUrls: ['./retention-over-time.component.css']
})
export class RetentionOverTimeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  lType = ChartType.LineChart;
  lCols = ['Date', 'Retention rate'];

  lData = [
    ['2022-01-18', 100],
    ['2022-01-19', 90],
    ['2022-01-20', 80],
    ['2022-01-21', 100],
  ];

  lOpts = {
    legend: 'dsd',
    vAxis: { minValue: 0 },
    width: 800, height: 300,
  };
}