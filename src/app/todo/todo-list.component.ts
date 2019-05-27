import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { SubSink } from 'subsink';
import { Todo } from './todo.model';
import { AppState } from '../store/app.reducers';

@Component({
  selector: 'app-todo-list',
  template: /*html*/ `
    <ng-container *ngIf="todoItems.length; else noItems">
      <ul class="todo-list">
        <app-todo-item [todo]="todo"
          *ngFor="let todo of todoItems; trackBy: trackByFn"></app-todo-item>
      </ul>
    </ng-container>

    <ng-template #noItems>
      <p>No tienes tareas</p>
    </ng-template>
  `
})
export class TodoListComponent implements OnInit, OnDestroy {
  public todoItems: Todo[] = [];
  private subs = new SubSink();

  constructor(public store: Store<AppState>) {}

  ngOnInit(): void {
    this.subs.add(this.store.subscribe(state => this.todoItems = state.todos));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  public trackByFn(index) {
    return index;
  }
}
