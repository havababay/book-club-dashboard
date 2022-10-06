import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ageGroupMetadata, AgeRange} from '../../../assets/data/report-metadata';

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

  @Input() ageRange?: AgeRange;

  @Output() onAgeChange = new EventEmitter<AgeRange>();

  onAgeSelectionChange(event) {
    this.onAgeChange.emit(event.value);
  }
}