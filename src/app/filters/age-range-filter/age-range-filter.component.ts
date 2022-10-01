import { Component, OnInit } from '@angular/core';
import { ageGroupMetadata} from '../../../assets/data/report-metadata';

@Component({
  selector: 'app-age-range-filter',
  templateUrl: './age-range-filter.component.html',
  styleUrls: ['./age-range-filter.component.css']
})
export class AgeRangeFilterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ageGroupMetadata() {
    return ageGroupMetadata;
  }
}