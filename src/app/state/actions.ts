import { Action } from '@ngrx/store';

export enum ActionTypes {
  UPDATE_FILTERS
}
 
export class GetTodos implements Action {
  readonly type = ActionTypes.UPDATE_FILTERS;

}