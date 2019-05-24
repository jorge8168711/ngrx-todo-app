import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-add',
  template: /*html*/ `
    <header class="todo-add">
      <h1 class="todo-add__label">Todos</h1>

      <div class="todo-add__field">
        <button class="button todo-add__toggle"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="fill" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg></button>
        <input class="todo-add__input" type="text" placeholder="Add new todo">
      </div>
    </header>
  `
})
export class TodoAddComponent {}
