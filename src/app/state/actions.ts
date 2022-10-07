import { createAction, props } from '@ngrx/store';
import { FilterOptions } from '../../assets/data/report-metadata';

export const updateFilters = createAction(
  'Update Filters',
  props<{ filters: FilterOptions }>()
);
