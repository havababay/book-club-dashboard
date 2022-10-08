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
export const getReadsByAge = createSelector(
  getReadsByAgeState,
  (state) => state.reads
);