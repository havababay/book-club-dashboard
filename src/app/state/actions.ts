import { Action } from '@ngrx/store';
import { FilterOptions } from '../../assets/data/report-metadata';

export enum ActionTypes {
  UPDATE_FILTERS = 'UPDATE_FILTERS'
}
 
export class UpdateFilters implements Action {
  readonly type = ActionTypes.UPDATE_FILTERS;
  constructor(public payload: FilterOptions) { }
}