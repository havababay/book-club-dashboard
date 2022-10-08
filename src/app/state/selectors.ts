import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState, FiltersState, ReadsByAgeState } from './store';

export const getFiltersState =
  createFeatureSelector<FiltersState>('filtersState');
export const getFilters = createSelector(
  getFiltersState,
  (state) => state.filters
);

export const getReadsByAgeState =
  createFeatureSelector<ReadsByAgeState>('readsByAgeState');
export const getReadsByAgeData = createSelector(
  getReadsByAgeState,
  (state) => state.reads.data
);
export const getReadsByAgeError = createSelector(
  getReadsByAgeState,
  (state) => state.reads.error
);
export const isReadsByAgeLoading = createSelector(
  getReadsByAgeState,
  (state) => state.reads.loading
);