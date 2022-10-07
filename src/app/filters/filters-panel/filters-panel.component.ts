import { Component, OnInit } from '@angular/core';
import {
  dateRangeMetadata,
  AgeRange,
  FilterOptions,
} from '../../../assets/data/report-metadata';
import { Output, Input, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filters-panel',
  templateUrl: './filters-panel.component.html',
  styleUrls: ['./filters-panel.component.css'],
})
export class FiltersPanelComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.defaultAgeRange = params['dateRange'];
    });
  }

  dateRangeMetadata() {
    return dateRangeMetadata;
  }

  defaultAgeRange = AgeRange.AGE_RANGE_35_44;

  @Input() filterOptions?: FilterOptions;

  @Output() onFilterOptionsChange = new EventEmitter<FilterOptions>();
}
