import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducers';
import * as fromActions from '../store/actions';

@Component({
  selector: 'app-todo-add',
  template: /*html*/ `
    <header class="todo-add">
      <h1 class="todo-add__label">Todos</h1>

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
export class TodoAddComponent implements OnInit {
  public textInput: FormControl;
  public toggleTodosValue = false;

  constructor(public store: Store<AppState>) {}

  ngOnInit(): void {
    this.textInput = new FormControl('', Validators.required);
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
