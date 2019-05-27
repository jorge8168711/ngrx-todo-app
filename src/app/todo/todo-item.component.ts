import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Todo } from './todo.model';
import { FormControl, Validators } from '@angular/forms';
import { AppState, ToggleTodoAction, EditTodoAction, DeleteTodoAction } from '../store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-item',
  template: /*html*/ `
    <li class="todo-item" [ngClass]="{ completed: todo.completed }">
      <input class="todo-item__checkbox"
        type="checkbox"
        [formControl]="checkInput"
        [checked]="todo.completed"
        (change)="toggle()">

      <label class="todo-item__label"
        (dblclick)="startEdition()"
        *ngIf="!isEditingMode">
        {{ todo.text }}
      </label>

      <input class="todo-item__input"
        type="text"
        [formControl]="textInput"
        [value]="todo.text"
        (blur)="finishEdition()"
        (keyup.enter)="finishEdition()"
        *ngIf="isEditingMode"
        #textInputRef>

      <button class="todo-item__delete button" type="button" (click)="delete()">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>
      </button>
    </li>
  `
})
export class TodoItemComponent implements OnInit {
  @Input() public todo: Todo;
  @ViewChild('textInputRef') public textInputRef: ElementRef;

  public isEditingMode = false;
  public textInput: FormControl;
  public checkInput: FormControl;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.textInput = new FormControl(this.todo.text, Validators.required);
    this.checkInput = new FormControl(this.todo.completed);
  }

  public startEdition(): void {
    this.isEditingMode = true;
    setTimeout(() => this.textInputRef.nativeElement.select(), 1);
  }

  public finishEdition() {
    this.isEditingMode = false;

    if (this.textInput.valid && this.textInput.value !== this.todo.text) {
      this.store.dispatch( new EditTodoAction({ id: this.todo.id, text: this.textInput.value }));
    }
  }

  public toggle() {
    this.store.dispatch(new ToggleTodoAction(this.todo.id));
  }

  public delete() {
    this.store.dispatch(new DeleteTodoAction(this.todo.id));
  }
}
