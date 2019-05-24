import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  template: /*html*/ `
    <ul class="todo-list">
      <app-todo-item></app-todo-item>
      <app-todo-item></app-todo-item>
      <app-todo-item></app-todo-item>
      <app-todo-item></app-todo-item>
    </ul>
  `
})
export class TodoListComponent {}
