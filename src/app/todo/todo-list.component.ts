import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  template: /*html*/ `
    <ul class="todo-list">
      <app-todo-item></app-todo-item>
    </ul>
  `,
  styles: [ /*css*/ `

  `]
})
export class TodoListComponent {}
