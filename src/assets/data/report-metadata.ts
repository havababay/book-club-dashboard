export enum DateRange {
  LAST_7_DAYS,
  LAST_28_DAYS,
  LAST_60_DAYS,
  CUSTOM,
}

export enum AgeRange {
  AGE_RANGE_18_24,
  AGE_RANGE_25_34,
  AGE_RANGE_35_44,
  AGE_RANGE_45_54,
  AGE_RANGE_55_64,
  AGE_RANGE_65_PLUS,
}

interface DateRangeOption {
  value: DateRange;
  viewValue: string;
}

export const dateRangeMetadata : DateRangeOption[] = [
  {value: DateRange.LAST_7_DAYS, viewValue: 'Last 7 Days'},
];
/*new Map<DateRange, string>([
  [DateRange.LAST_7_DAYS,'Last 7 Days'],
  [DateRange.LAST_28_DAYS,'Last 28 Days'],
  [DateRange.LAST_60_DAYS,'Last 60 Days'],
  [DateRange.CUSTOM,'Custom']
]);*/

export const ageGroupMetadata = new Map<AgeRange, string>([
  [AgeRange.AGE_RANGE_18_24,'18 - 24'],
  [AgeRange.AGE_RANGE_25_34,'25 - 34'],
  [AgeRange.AGE_RANGE_35_44,'35 - 44'],
  [AgeRange.AGE_RANGE_45_54,'45 - 54'],
  [AgeRange.AGE_RANGE_55_64,'55 - 64'],
  [AgeRange.AGE_RANGE_65_PLUS,'65 +'],
]);


