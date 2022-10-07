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
    console.log('on init');
    this.activatedRoute.queryParams.subscribe((params) => {
      console.log('routing parammmeters' + params['a']);
    });
  }

  dateRangeMetadata() {
    return dateRangeMetadata;
  }

  defaultAgeRange = AgeRange.AGE_RANGE_35_44;

  @Input() filterOptions?: FilterOptions;

  @Output() onFilterOptionsChange = new EventEmitter<FilterOptions>();
}
