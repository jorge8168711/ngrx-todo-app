import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-status-bar',
  template: /*html*/ `
    <p>0 tareas pendientes</p>
    <button>todos</button>
    <button>pendientes</button>
    <button>completados</button>
    <button>limpiar completados</button>
  `,
  styles: [ /*css*/ `
    .todo-item {
      display: flex;
      align-items: center;
    }
  `]
})
export class TodoStatusBarComponent {}
