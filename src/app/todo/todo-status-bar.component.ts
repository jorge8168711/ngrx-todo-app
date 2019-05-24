import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-status-bar',
  template: /*html*/ `
    <div class="todo-status-bar">
      <button class="todo-status-bar__button button active">All</button>
      <button class="todo-status-bar__button button">Active</button>
      <button class="todo-status-bar__button button">Completed</button>

      <p class="todo-status-bar__status"><strong>35%</strong> completado</p>
    </div>
  `
})
export class TodoStatusBarComponent {

}
