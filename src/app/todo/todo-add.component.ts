import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-add',
  template: /*html*/ `
    <header>
      <h1>todos</h1>
      <button>Complete all</button>
      <input type="text" placeholder="Add new todo">
    </header>
  `,
  styles: [ /*css*/ `

  `]
})
export class TodoAddComponent {}
