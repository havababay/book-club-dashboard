import { AppState } from './store';
import { AnyAction } from 'redux';
import { ActionTypes } from './actions';

export function rootReducer(lastState: AppState, action: AnyAction): AppState {
  switch (action.type) {
    case ActionTypes.UPDATE_FILTERS:
      return {
        ...lastState,
        filters: action.payload,
      };
  }
  return lastState;
}
