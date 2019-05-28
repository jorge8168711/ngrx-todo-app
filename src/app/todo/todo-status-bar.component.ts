import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducers';
import { ValidFilters } from '../store/reducers';
import { SetFilterAction } from '../store/actions';
import { Todo } from './todo.model';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-todo-status-bar',
  template: /*html*/ `
    <div class="todo-status-bar">
      <button class="todo-status-bar__button button"
        [ngClass]="{ 'active': currentFilter === filter }"
        (click)="setFilter(filter)"
        *ngFor="let filter of validFilters">
        {{ filter }}
      </button>

      <p class="todo-status-bar__status">
        <strong>{{ completedPercentage }} %</strong> completed
      </p>
    </div>
  `
})
export class TodoStatusBarComponent implements OnInit, OnDestroy {
  public completedPercentage: number;
  public validFilters: ValidFilters[] = ['all', 'pending', 'completed'];
  public currentFilter: ValidFilters;
  private subs = new SubSink();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.subs.add(
      this.store.subscribe((state: AppState) => {
        this.currentFilter = state.filters;
        this.completedPercentage = this.getCompletedPercentage(state.todos);
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  public setFilter(filter: ValidFilters) {
    this.store.dispatch(new SetFilterAction(filter));
  }

  public getCompletedPercentage(todos: Todo[]): number {
    const totalTodos = todos.length;
    const completedTodos = todos.filter((el: Todo) => el.completed).length;

    return todos.length ?
      Math.floor(completedTodos / totalTodos * 100) : 0;
  }
}
