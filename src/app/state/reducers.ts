import { AppState, FiltersState, INITIAL_STATE } from './store';
import { updateFilters } from './actions';
import { ActionReducerMap, createReducer, on } from '@ngrx/store';

export const updateFiltersReducer = createReducer(
  {} as FiltersState,
  on(updateFilters, (lastState, _action) => lastState),
)

export const reducers: ActionReducerMap<AppState> = {
  filtersState: updateFiltersReducer
};
