import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { SubSink } from 'subsink';
import { Todo } from './todo.model';
import { AppState } from '../store/app.reducers';
import { ValidFilters } from '../store/reducers';

@Component({
  selector: 'app-todo-list',
  template: /*html*/ `
    <ng-container *ngIf="(todoItems | todosFilter: currentFilter).length; else noItems">
      <ul class="todo-list">
        <app-todo-item [todo]="todo"
          *ngFor="let todo of (todoItems | todosFilter: currentFilter); trackBy: trackByFn">
        </app-todo-item>
      </ul>
    </ng-container>

    <ng-template #noItems>
      <p>You don't have {{ currentFilter == 'all' ? '' : currentFilter }} tasks</p>
    </ng-template>
  `
})
export class TodoListComponent implements OnInit, OnDestroy {
  public todoItems: Todo[] = [];
  public currentFilter: ValidFilters;
  private subs = new SubSink();

  constructor(public store: Store<AppState>) {}

  ngOnInit(): void {
    this.subs.add(this.store.subscribe((state: AppState) => {
      this.todoItems = state.todos;
      this.currentFilter = state.filters;
    }));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  public trackByFn(index) {
    return index;
  }
}
