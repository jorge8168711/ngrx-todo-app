import { Todo } from '../todo/todo.model';
import { ValidFilters, todoReducer, filterReducer } from './reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  todos: Todo[];
  filters: ValidFilters;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filters: filterReducer
}
