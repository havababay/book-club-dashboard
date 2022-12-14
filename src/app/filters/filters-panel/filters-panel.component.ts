import { Component, OnInit } from '@angular/core';
import {
  dateRangeMetadata,
  AgeRange,
  FilterOptions,
} from '../../../assets/data/report-metadata';
import { Output, Input, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { updateFilters } from '../../state/actions';

@Component({
  selector: 'app-filters-panel',
  templateUrl: './filters-panel.component.html',
  styleUrls: ['./filters-panel.component.css'],
})
export class FiltersPanelComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store
  ) {}

  ngOnInit() {}

  dateRangeMetadata() {
    return dateRangeMetadata;
  }

  currentAgeRange: AgeRange = AgeRange.AGE_RANGE_35_44;

  @Input() filterOptions?: FilterOptions;

  @Output() onFilterOptionsChange = new EventEmitter<FilterOptions>();

  onDateChange(dateRange) {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { dateRange: dateRange },
      queryParamsHandling: 'merge', // remove to replace all query params by provided
    });

    var currentFilters: FilterOptions = {
      date: dateRange,
      age: this.currentAgeRange,
    };
    this.store.dispatch(updateFilters({ filters: currentFilters }));
  }
}
