import { Component, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';
import { ActivatedRoute } from '@angular/router';
import { AgeRange } from '../../assets/data/report-metadata';

@Component({
  selector: 'app-genres-chart',
  templateUrl: './genres-chart.component.html',
  styleUrls: ['./genres-chart.component.css'],
})
export class GenresChartComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  currentAgeRange: AgeRange;

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.currentAgeRange = params['dateRange'];
    });
  }

  // pie
  pType = ChartType.PieChart;
  pCols = ['Value', 'Count'];
  pOpts = {
    legend: 'dsd',
    chartArea: { width: '100%' },
    width: 800,
    height: 300,
  };
  pData = [
    ['Romance', 1],
    ['Young adult', 2],
    ['Historical fiction', 3],
    ['Science fiction', 3],
    ['Autobiography', 3],
  ];
}
