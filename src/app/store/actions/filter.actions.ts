import { Action } from '@ngrx/store';
import { ValidFilters } from '../reducers';

export const SET_FILTER = '[SET_FILTER] Set filter';

export class SetFilterAction implements Action {
  readonly type = SET_FILTER;
  constructor(public filter: ValidFilters) { }
}

export type FilterActions = SetFilterAction;
