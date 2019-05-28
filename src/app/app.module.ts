import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';

// components
import { AppComponent } from './app.component';
import {
  TodoAddComponent,
  TodoListComponent,
  TodoItemComponent,
  TodoStatusBarComponent } from './todo';

// NGRX
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from './store/app.reducers';
import { TodosFilterPipe } from './todo/todo-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoAddComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoStatusBarComponent,
    TodosFilterPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
