import { AppState, FeatureReadsByAge, FiltersState, INITIAL_STATE, ReadsByAgeState } from './store';
import {
  updateFilters,
  fetchReadsByAgPending,
  fetchReadsByAgeSuccess,
  fetchReadsByAgeError,
} from './actions';
import { ActionReducerMap, createReducer, on } from '@ngrx/store';
import { FilterOptions } from '../../assets/data/report-metadata';

export const updateFiltersReducer = createReducer(
  {} as FilterOptions,
  on(updateFilters, updateStoreWithNewFilters)
);

function updateStoreWithNewFilters(lastState, _action) {
  return { ...lastState, filters: _action.filters };
}

export const fetchReadsByAgeReducer = createReducer(
  {} as FeatureReadsByAge,
  on(fetchReadsByAgPending, (lastState, _action) => {
    return { ...lastState, loading: true };
  }),
  on(fetchReadsByAgeSuccess, (lastState, _action) => {
    return { ...lastState, data: _action.readsByAge, loading: false };
  }),
  on(fetchReadsByAgeError, (lastState, _action) => {
    return { ...lastState, error: _action.error, loading: false };
  })
);

export const reducers: ActionReducerMap<FiltersState> = {
  filters: updateFiltersReducer,
};

export const readsByAgeReducers: ActionReducerMap<ReadsByAgeState> = {
  reads: fetchReadsByAgeReducer
};


