import { Action } from '@ngrx/store';

export const ADD_TODO = '[TODO] Add todo';
export const TOGGLE_TODO = '[TODO] Toggle todo';
export const TOGGLE_ALL_TODOS = '[TODO] Toggle ALL todos';
export const EDIT_TODO = '[TODO] Edit todo';
export const DELETE_TODO = '[TODO] Delete todo';

export class AddTodoAction implements Action {
  readonly type = ADD_TODO;
  constructor(public payload: string) { }
}

export class ToggleTodoAction implements Action {
  readonly type = TOGGLE_TODO;
  constructor(public payload: number) { }
}

export class ToggleAllTodosAction implements Action {
  readonly type = TOGGLE_ALL_TODOS;
  constructor(public payload: boolean) { }
}

export class EditTodoAction implements Action {
  readonly type = EDIT_TODO;
  constructor(public payload: { id: number, text: string }) { }
}

export class DeleteTodoAction implements Action {
  readonly type = DELETE_TODO;
  constructor(public payload: number) { }
}

export type TodoActions = AddTodoAction
  | ToggleTodoAction
  | EditTodoAction
  | DeleteTodoAction
  | ToggleAllTodosAction;
