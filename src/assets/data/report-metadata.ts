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

interface AgeRangeOption {
  value: AgeRange;
  viewValue: string;
}

export const dateRangeMetadata : DateRangeOption[] = [
  {value: DateRange.LAST_7_DAYS, viewValue: 'Last 7 Days'},
  {value: DateRange.LAST_28_DAYS, viewValue: 'Last 28 Days'},
  {value: DateRange.LAST_60_DAYS, viewValue: 'Last 60 Days'},
  {value: DateRange.CUSTOM, viewValue: 'Custom'},
];

export const ageGroupMetadata : AgeRangeOption[] = [
  {value: AgeRange.AGE_RANGE_18_24,viewValue:'18 - 24'},
  {value: AgeRange.AGE_RANGE_25_34,viewValue:'25 - 34'},
  {value: AgeRange.AGE_RANGE_35_44,viewValue:'35 - 44'},
  {value: AgeRange.AGE_RANGE_45_54,viewValue:'45 - 54'},
  {value: AgeRange.AGE_RANGE_55_64,viewValue:'55 - 64'},
  {value: AgeRange.AGE_RANGE_65_PLUS,viewValue:'65 +'},
];


