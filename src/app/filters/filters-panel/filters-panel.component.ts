import { Component, OnInit } from '@angular/core';
import { dateRangeMetadata} from '../../../assets/data/report-metadata';

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
}