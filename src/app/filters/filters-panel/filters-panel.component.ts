import { Component, OnInit } from '@angular/core';
import { dateRangeMetadata, AgeRange} from '../../../assets/data/report-metadata';

@Component({
  selector: 'app-filters-panel',
  templateUrl: './filters-panel.component.html',
  styleUrls: ['./filters-panel.component.css']
})
export class FiltersPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  dateRangeMetadata() {
    return dateRangeMetadata;
  }

  defaultAgeRange = AgeRange.AGE_RANGE_35_44;
}