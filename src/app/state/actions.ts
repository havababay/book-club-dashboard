import { createAction, props } from '@ngrx/store';
import { FilterOptions } from '../../assets/data/report-metadata';

export const updateFilters = createAction(
  'Update Filters',
  props<{ filters: FilterOptions }>()
);

export const fetchReadsByAgPending = createAction(
  'Fetch Reads By Age - Pending',
  props<{ filters: FilterOptions }>()
);

export const fetchReadsByAgeSuccess = createAction(
  'Fetch Reads By Age - Success',
  props<{ readsByAge }>()
);


export const fetchReadsByAgeError = createAction(
  'Fetch Reads By Age - Error',
  props<{ error: string }>()
);
