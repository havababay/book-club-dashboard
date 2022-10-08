import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState, FiltersState, ReadsByAgeState } from './store';

export const getFiltersState =
  createFeatureSelector<FiltersState>('filtersState');

export const getReadsByAgeState =
  createFeatureSelector<ReadsByAgeState>('readsByAgeState');