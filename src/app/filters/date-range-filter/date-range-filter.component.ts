import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { dateRangeMetadata, DateRange} from '../../../assets/data/report-metadata';

@Component({
  selector: 'app-date-range-filter',
  templateUrl: './date-range-filter.component.html',
  styleUrls: ['./date-range-filter.component.css']
})
export class DateRangeFilterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  dateRangeMetadata() {
    return dateRangeMetadata;
  }

  @Input() dateRange?: DateRange;

  @Output() onDateChange = new EventEmitter<DateRange>();

  onDateSelectionChange(event) {
    this.onDateChange.emit(event.value);
  }
}