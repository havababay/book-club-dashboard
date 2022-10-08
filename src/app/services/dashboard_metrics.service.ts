import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AgeRange, FilterOptions } from '../../assets/data/report-metadata';

@Injectable()
export class DashboardMetricsService {
  constructor() {}

  readsByAgeStaticData = new Map<AgeRange, number>([
    [AgeRange.AGE_RANGE_18_24, 160],
    [AgeRange.AGE_RANGE_25_34, 30],
    [AgeRange.AGE_RANGE_35_44, 20],
    [AgeRange.AGE_RANGE_45_54, 50],
    [AgeRange.AGE_RANGE_55_64, 90],
    [AgeRange.AGE_RANGE_65_PLUS, 90],
  ]);

  fetchReadsByAge(filters: FilterOptions): Observable<Map<AgeRange, number>> {
    return of(this.readsByAgeStaticData);
  }
}
