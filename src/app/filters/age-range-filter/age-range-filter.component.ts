import { Component, Input, OnInit } from '@angular/core';
import { ageGroupMetadata, AgeRange} from '../../../assets/data/report-metadata';
import { Output, EventEmitter } from '@angular/core';

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

  @Output() OnAgeChange = new EventEmitter<AgeRange>();

  onAgeSelectionChange(event) {
    this.OnAgeChange.emit(event.value);
  }
}