import { AppState, FiltersState, INITIAL_STATE } from './store';
import { updateFilters } from './actions';
import { ActionReducerMap, createReducer, on } from '@ngrx/store';

/*
export function rootReducer(lastState: AppState, action: AnyAction): AppState {
  switch (action.type) {
    case ActionTypes.UPDATE_FILTERS:
      return {
        ...lastState,
        filters: action.payload,
      };
  }
  return lastState;
}*/

export const updateFiltersReducer = createReducer(
  {} as FiltersState,
  on(updateFilters, (lastState, _action) => lastState),
)

export const reducers: ActionReducerMap<AppState> = {
  filtersState: updateFiltersReducer
};
