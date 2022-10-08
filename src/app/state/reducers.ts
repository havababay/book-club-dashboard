import { FiltersState, ReadsByAgeState } from './store';
import {
  updateFilters,
  fetchReadsByAgPending,
  fetchReadsByAgeSuccess,
  fetchReadsByAgeError,
} from './actions';
import { ActionReducerMap, createReducer, on } from '@ngrx/store';
import {
  AgeRange,
  DateRange,
  FilterOptions,
} from '../../assets/data/report-metadata';

const initialStateFilters: FiltersState = {
  filters: {
    age: AgeRange.AGE_RANGE_18_24,
    date: DateRange.LAST_7_DAYS,
  },
};
export const updateFiltersReducer = createReducer(
  {} as FiltersState,
  on(updateFilters, (lastState = initialStateFilters, _action) => {
    return { ...lastState, filters: _action.filters };
  })
);

const initialStateReads: ReadsByAgeState = {
  loading: true,
  data: new Map<AgeRange, number>(),
  error: null,
};
export const fetchReadsByAgeReducer = createReducer(
  {} as ReadsByAgeState,
  on(fetchReadsByAgPending, (lastState = initialStateReads, _action) => {
    return { ...lastState, loading: true };
  }),
  on(fetchReadsByAgeSuccess, (lastState, _action) => {
    return { ...lastState, data: _action.data, loading: false };
  }),
  on(fetchReadsByAgeError, (lastState, _action) => {
    return { ...lastState, error: _action.error, loading: false };
  })
);
