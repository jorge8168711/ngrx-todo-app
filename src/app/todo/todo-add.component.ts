import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AddTodoAction, AppState } from '../store';

@Component({
  selector: 'app-todo-add',
  template: /*html*/ `
    <header class="todo-add">
      <h1 class="todo-add__label">Todos</h1>

      <div class="todo-add__field">
        <button class="button todo-add__toggle"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="fill" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg></button>
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
  textInput: FormControl;

  constructor(public store: Store<AppState>) {}

  ngOnInit(): void {
    this.textInput = new FormControl('', Validators.required);
  }

  addTodo() {
    if (!this.textInput.invalid) {
      this.store.dispatch(new AddTodoAction(this.textInput.value));
      this.textInput.setValue('');
    }
  }
}
