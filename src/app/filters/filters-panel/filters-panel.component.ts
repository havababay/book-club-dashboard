import { Component, OnInit } from '@angular/core';
import {
  dateRangeMetadata,
  AgeRange,
  FilterOptions,
} from '../../../assets/data/report-metadata';
import { Output, Input, EventEmitter } from '@angular/core';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filters-panel',
  templateUrl: './filters-panel.component.html',
  styleUrls: ['./filters-panel.component.css'],
})
export class FiltersPanelComponent implements OnInit {
 /* constructor(private router: Router) {
    router.events.subscribe((val) => {
      // see also 
      console.log(val instanceof NavigationEnd) 
  });
  }*/
/*
  constructor(private route: ActivatedRoute) {
    console.log("constructor");
  }*/
/*
  ngOnInit() {
    console.log("on init");
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // { order: "popular" }
      }
    );
  }
*/
ngOnInit() {}
  dateRangeMetadata() {
    return dateRangeMetadata;
  }

  defaultAgeRange = AgeRange.AGE_RANGE_35_44;

  @Input() filterOptions?: FilterOptions;

  @Output() onFilterOptionsChange = new EventEmitter<FilterOptions>();
}
