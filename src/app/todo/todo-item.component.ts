import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  template: /*html*/ `
    <li class="todo-item">
      <div class="todo-item__checkmark"></div>
      <input class="todo-item__checkbox" type="checkbox">
      <p class="todo-item__label">Quiero comer en la casa</p>
      <input class="todo-item__input" type="text">
      <button class="todo-item__delete button" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg></button>
    </li>
  `
})
export class TodoItemComponent {}
