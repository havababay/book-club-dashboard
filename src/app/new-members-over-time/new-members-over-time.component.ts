import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ChartType } from 'angular-google-charts';
import { FilterOptions } from '../../assets/data/report-metadata';
import { getFilters } from '../state/selectors';

@Component({
  selector: 'app-new-members-over-time',
  templateUrl: './new-members-over-time.component.html',
  styleUrls: ['./new-members-over-time.component.css'],
})
export class NewMembersOverTimeComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.pipe(select(getFilters)).subscribe((filters: FilterOptions) => {
      console.log('NewMembersOverTimeComponent new filters - age ' + filters.age + ' - date ' + filters.date);
      this.currentFilters = filters;
    });
  }

  currentFilters : FilterOptions;
  lType = ChartType.LineChart;
  lCols = ['Date', 'New Members Count'];
  lTitle = 'New members trend';

  lData = [
    ['2022-01-18', 100],
    ['2022-01-19', 117],
    ['2022-01-20', 66],
    ['2022-01-21', 103],
  ];

  lOpts = {
    legend: 'dsd',
    vAxis: { minValue: 0 },
    width: 800,
    height: 300,
  };
}
