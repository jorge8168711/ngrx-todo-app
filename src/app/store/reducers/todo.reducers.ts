import { Todo } from '../../todo/todo.model';
import * as fromTodoActions from '../actions';

const initialState: Todo[] = [
  new Todo('Example task number 1'),
  new Todo('Example task number 2'),
  new Todo('Example task number 3')
];

export function todoReducer(
  state: Todo[] = initialState,
  action: fromTodoActions.TodoActions ): Todo[] {

  switch (action.type) {
    case fromTodoActions.ADD_TODO:
      const todo = new Todo(action.payload);
      return [ ...state, todo ];

    case fromTodoActions.TOGGLE_TODO:
      return state.map((el: Todo) => {
        if (el.id === action.payload) {
          return { ...el, completed: !el.completed };
        } else { return el; }
      });

    case fromTodoActions.EDIT_TODO:
      return state.map((el: Todo) => {
        if (el.id === action.payload.id) {
          return { ...el, text: action.payload.text };
        } else { return el; }
      });

    case fromTodoActions.DELETE_TODO:
      return state.filter((el: Todo) => el.id !== action.payload);

    case fromTodoActions.TOGGLE_ALL_TODOS:
      return state.map((el: Todo) => {
        return {
          ...el,
          completed: action.payload
        };
      });

    case fromTodoActions.CLEAR_COMPLETED_TOOS:
      return state.filter((el: Todo) => !el.completed);

    default:
      return state;
  }
}
