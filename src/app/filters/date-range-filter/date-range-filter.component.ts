import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {
  dateRangeMetadata,
  DateRange,
} from '../../../assets/data/report-metadata';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-date-range-filter',
  templateUrl: './date-range-filter.component.html',
  styleUrls: ['./date-range-filter.component.css'],
})
export class DateRangeFilterComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {}

  dateRangeMetadata() {
    return dateRangeMetadata;
  }

  @Input() dateRange?: DateRange;

  @Output() onDateChange = new EventEmitter<DateRange>();

  onDateSelectionChange(event) {
    this.onDateChange.emit(event.value);

    const queryParams: Params = { a: event.value };

    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: queryParams,
      queryParamsHandling: 'merge', // remove to replace all query params by provided
    });
  }
}
