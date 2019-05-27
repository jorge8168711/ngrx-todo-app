import { Todo } from '../../todo/todo.model';
import * as fromTodoActions from '../actions';

const initialState: Todo[] = [
  new Todo('Todo de prueba antes de crear número 1'),
  new Todo('Todo de prueba antes de crear número 2')
];

export function todoReducer(
  state: Todo[] = initialState,
  action: fromTodoActions.Actions ): Todo[] {

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

    default:
      return state;
  }
}
