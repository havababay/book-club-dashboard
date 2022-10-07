import { FiltersState, INITIAL_STATE } from './store';
import { updateFilters } from './actions';
import { ActionReducerMap, createReducer, on } from '@ngrx/store';
import { FilterOptions } from '../../assets/data/report-metadata';

export const updateFiltersReducer = createReducer(
  {} as FilterOptions,
  on(updateFilters, updateStoreWithNewFilters)
);

export const reducers: ActionReducerMap<FiltersState> = {
  filters: updateFiltersReducer,
};

function updateStoreWithNewFilters(lastState, _action) {
  return { ...lastState, filters: _action.filters };
}
