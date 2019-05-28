import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todo.model';
import { ValidFilters } from '../store/reducers';

@Pipe({ name: 'todosFilter' })
export class TodosFilterPipe implements PipeTransform {
  transform(todos: Todo[], filter: ValidFilters): Todo[] {
    switch (filter) {
      case ('completed'):
        return todos.filter((todo: Todo) => todo.completed);
      case ('pending'):
        return todos.filter((todo: Todo) => !todo.completed);

      default:
        return todos;
    }
  }
}
