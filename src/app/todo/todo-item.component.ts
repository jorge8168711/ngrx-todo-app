import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  template: /*html*/ `
    <li class="todo-item">
      <input type="checkbox">
      <p>label</p>
      <button type="button">X</button>
    </li>
  `,
  styles: [ /*css*/ `
    .todo-item {
      display: flex;
      align-items: center;
    }
  `]
})
export class TodoItemComponent {}
