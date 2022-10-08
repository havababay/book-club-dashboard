import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ChartType } from 'angular-google-charts';
import { fetchReadsByAgPending } from '../state/actions';
import { getReadsByAgeState, getFiltersState } from '../state/selectors';
import { FiltersState, ReadsByAgeState } from '../state/store';

@Component({
  selector: 'app-reads-by-age',
  templateUrl: './reads-by-age.component.html',
  styleUrls: ['./reads-by-age.component.css'],
})
export class ReadsByAgeComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit() {
    this.store
      .pipe(select(getReadsByAgeState))
      .subscribe((state: ReadsByAgeState) => {
        console.log('selector: starting');

        if (state === undefined) {
          return;
        }
        if (state.loading == true) {
          console.log('selector: loading');
          this.isLoading = true;
        } else {
          if (state.data != null) {
            this.isLoading = false;
            //this.bData = reads.data;
            console.log('selector: loading done');
          }
        }
      });

    this.store.pipe(select(getFiltersState)).subscribe((state: FiltersState) => {
      if (state.filters === undefined) {
        return;
      }

      console.log(
        'ReadsByAgeComponent new filters - age ' + state.filters.age + ' - date ' + state.filters.date
      );
      //this.currentFilters = filters;

      this.store.dispatch(fetchReadsByAgPending({ filters: state.filters }));
    });
  }

  isLoading = true;

  // Bar chart
  bType = ChartType.ColumnChart;
  bData = [
    ['18-24', 160, 'blue', 160],
    ['25-34', 30, 'blue', 30],
    ['35-44', 20, 'blue', 20],
    ['45-54', 50, 'blue', 50],
    ['55-64', 90, 'blue', 90],
    ['65+', 90, 'blue', 90],
  ];
  bColumnNames = [
    'Age',
    'Books Read',
    { role: 'style' },
    { role: 'annotation' },
  ];
  bOptions = {
    title: '',
    width: 800,
    height: 300,
    tooltip: {
      textStyle: { color: 'black', fontName: 'Tahoma', fontSize: '15' },
    },
    labels: 'none',
    pieSliceText: 'none',
    pieSliceTextStyle: { color: 'red', fontSize: 9, display: 'none' },
    slices: [
      { color: '3eafe0' },
      { color: 'bd6a67' },
      { color: 'b9b262' },
      { color: '6abf7e' },
      { color: '6c95b7' },
    ],
    // chartArea: { top: 10, left: 20, width: "70%", height: "75%" },
    is3D: false /*sliceVisibilityThreshold: 0,*/,
    fontSize: 9,
    legend: 'dsd',
  };
}
