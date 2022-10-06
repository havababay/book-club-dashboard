import { Component, OnInit } from '@angular/core';
import { dateRangeMetadata} from '../../../assets/data/report-metadata';

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
}