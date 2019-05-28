import { Component, OnInit, OnDestroy } from '@angular/core';
import { SubSink } from 'subsink';
import { Todo } from './todo.model';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducers';
import { ValidFilters } from '../store/reducers';
import { ClearCompletedTodosAction } from '../store/actions';

@Component({
  selector: 'app-todo-list',
  template: /*html*/ `
    <ng-container *ngIf="(todoItems | todosFilter: currentFilter).length; else noItems">
      <ul class="todo-list">
        <app-todo-item [todo]="todo"
          *ngFor="let todo of (todoItems | todosFilter: currentFilter); trackBy: trackByFn">
        </app-todo-item>
      </ul>

      <footer class="text-right">
        <button class="clear-button button"
          (click)="clearCompletedTasks()"
          *ngIf="(todoItems | todosFilter: 'completed').length"
          type="button">
          Clear completed tasks
        </button>
      </footer>
    </ng-container>

    <ng-template #noItems>
      <section class="no-items" #noItems>
        <svg class="no-items__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8 17c-.55 0-1-.45-1-1v-5c0-.55.45-1 1-1s1 .45 1 1v5c0 .55-.45 1-1 1zm4 0c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v8c0 .55-.45 1-1 1zm4 0c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1z"/></svg>
        <p class="no-items__label">
          You don't have {{ currentFilter === 'all' || !todoItems.length ? '' : currentFilter }} tasks
        </p>
      </section>
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

  public trackByFn(_index: number, id: number): number {
    return id;
  }

  public clearCompletedTasks() {
    this.store.dispatch( new ClearCompletedTodosAction() );
  }
}
