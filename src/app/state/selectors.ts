import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FiltersState } from './store';

export const getFiltersState =
  createFeatureSelector<FiltersState>('filtersState');

export const getFilters = createSelector(
  getFiltersState,
  (state) => state.filters
);
