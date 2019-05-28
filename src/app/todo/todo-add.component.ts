import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducers';
import * as fromActions from '../store/actions';
import { SubSink } from 'subsink';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo-add',
  template: /*html*/ `
    <header class="todo-add">
      <h1 class="todo-add__label">My Todos</h1>

      <div class="todo-add__field">
        <label class="todo-add__toggle" for="toggle"
          [ngClass]="{ 'selected': toggleTodosValue }">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="fill" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>
        </label>

        <input class="todo-add__checkbox"
          type="checkbox"
          id="toggle"
          [checked]="toggleTodosValue"
          (change)="toggleAll()">

        <input class="todo-add__input"
          autocomplete="off"
          type="text"
          placeholder="Add new todo"
          [formControl]="textInput"
          (keyup.enter)="addTodo()">
      </div>
    </header>
  `
})
export class TodoAddComponent implements OnInit, OnDestroy {
  public textInput: FormControl;
  public toggleTodosValue = false;
  public sub = new SubSink();

  constructor(public store: Store<AppState>) {}

  ngOnInit(): void {
    this.textInput = new FormControl('', Validators.required);
    this.sub.add(this.store.select('todos').subscribe((todos: Todo[]) => {
      return todos.length === todos.filter((todo: Todo) => todo.completed).length
        ? this.toggleTodosValue = true
        : this.toggleTodosValue = false;
    }));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  addTodo() {
    if (!this.textInput.invalid) {
      this.store.dispatch(new fromActions.AddTodoAction(this.textInput.value));
      this.textInput.setValue('');
      this.toggleTodosValue = false;
    }
  }

  public toggleAll() {
    this.toggleTodosValue = !this.toggleTodosValue;
    this.store.dispatch(new fromActions.ToggleAllTodosAction(this.toggleTodosValue));
  }
}
