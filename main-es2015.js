(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'ngrx-todo-app';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: /*html*/ `
    <section class="todoapp">
      <main class="main">
        <div class="signature">
          <a class="signature__name" href="https://twitter.com/_JorgeBarron" target="_blank">Jorge Barron</a>
          <hr class="divider" />

          <div class="signature__socials">
            <a class="signature__socials-link" href="https://github.com/jorge8168711/ngrx-todo-app" target="_blank">
              <svg class="signature__socials-icon" style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#767676" d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H14.56C14.24,20.93 14.23,20.32 14.23,20.11L14.24,17.64C14.24,16.8 13.95,16.25 13.63,15.97C15.64,15.75 17.74,15 17.74,11.53C17.74,10.55 17.39,9.74 16.82,9.11C16.91,8.89 17.22,7.97 16.73,6.73C16.73,6.73 15.97,6.5 14.25,7.66C13.53,7.46 12.77,7.36 12,7.35C11.24,7.36 10.46,7.46 9.75,7.66C8.03,6.5 7.27,6.73 7.27,6.73C6.78,7.97 7.09,8.89 7.18,9.11C6.61,9.74 6.26,10.55 6.26,11.53C6.26,15 8.36,15.75 10.36,16C10.1,16.2 9.87,16.6 9.79,17.18C9.27,17.41 7.97,17.81 7.17,16.43C7.17,16.43 6.69,15.57 5.79,15.5C5.79,15.5 4.91,15.5 5.73,16.05C5.73,16.05 6.32,16.33 6.73,17.37C6.73,17.37 7.25,19.12 9.76,18.58L9.77,20.11C9.77,20.32 9.75,20.93 9.43,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z" /></svg>
            </a>

            <a class="signature__socials-link" href="https://www.linkedin.com/in/jorgebarrondev/" target="_blank">
              <svg class="signature__socials-icon" style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#767676" d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z" /></svg>
            </a>
          </div>
        </div>

        <app-todo-add></app-todo-add>
        <app-todo-status-bar></app-todo-status-bar>
        <app-todo-list></app-todo-list>
      </main>
    </section>
  `,
        styles: ["\n    .signature {\n      margin-bottom: 4em;\n      display: flex;\n      align-items: center;\n    }\n\n    .signature__name {\n      font-size: 13px;\n      color: #767676;\n      text-decoration: none;\n      transition: background-color 0.2s cubic-bezier(0.4, 0, 1, 1);\n    }\n\n    .divider {\n      background-color: var(--text-primary);\n      height: 40px;\n      width: 1px;\n      border: 0;\n      opacity: .5;\n      margin: 0 .5em;\n    }\n\n    .signature__socials {\n      flex: 1;\n    }\n\n    .signature__socials-link {\n      text-decoration: none;\n      padding: 10px 0;\n      margin-right: .5em;\n    }\n\n    .signature__socials-icon {\n      fill: #767676;\n      opacity: 0.7;\n      transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n    }\n\n    .signature__socials-icon:hover {\n      opacity: 1;\n    }\n  "]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todo */ "./src/app/todo/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm2015/store-devtools.js");
/* harmony import */ var _store_app_reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/app.reducers */ "./src/app/store/app.reducers.ts");
/* harmony import */ var _todo_todo_filter_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./todo/todo-filter.pipe */ "./src/app/todo/todo-filter.pipe.ts");





// components


// NGRX




let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _todo__WEBPACK_IMPORTED_MODULE_6__["TodoAddComponent"],
            _todo__WEBPACK_IMPORTED_MODULE_6__["TodoListComponent"],
            _todo__WEBPACK_IMPORTED_MODULE_6__["TodoItemComponent"],
            _todo__WEBPACK_IMPORTED_MODULE_6__["TodoStatusBarComponent"],
            _todo_todo_filter_pipe__WEBPACK_IMPORTED_MODULE_10__["TodosFilterPipe"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot(_store_app_reducers__WEBPACK_IMPORTED_MODULE_9__["appReducers"]),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__["StoreDevtoolsModule"].instrument({
                maxAge: 25,
                logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production // Restrict extension to log-only mode
            })
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/store/actions/filter.actions.ts":
/*!*************************************************!*\
  !*** ./src/app/store/actions/filter.actions.ts ***!
  \*************************************************/
/*! exports provided: SET_FILTER, SetFilterAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_FILTER", function() { return SET_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetFilterAction", function() { return SetFilterAction; });
const SET_FILTER = '[SET_FILTER] Set filter';
class SetFilterAction {
    constructor(filter) {
        this.filter = filter;
        this.type = SET_FILTER;
    }
}


/***/ }),

/***/ "./src/app/store/actions/index.ts":
/*!****************************************!*\
  !*** ./src/app/store/actions/index.ts ***!
  \****************************************/
/*! exports provided: ADD_TODO, TOGGLE_TODO, TOGGLE_ALL_TODOS, EDIT_TODO, DELETE_TODO, CLEAR_COMPLETED_TOOS, AddTodoAction, ToggleTodoAction, ToggleAllTodosAction, EditTodoAction, DeleteTodoAction, ClearCompletedTodosAction, SET_FILTER, SetFilterAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.actions */ "./src/app/store/actions/todo.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ADD_TODO", function() { return _todo_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_TODO"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_TODO", function() { return _todo_actions__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_TODO"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_ALL_TODOS", function() { return _todo_actions__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_ALL_TODOS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EDIT_TODO", function() { return _todo_actions__WEBPACK_IMPORTED_MODULE_0__["EDIT_TODO"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DELETE_TODO", function() { return _todo_actions__WEBPACK_IMPORTED_MODULE_0__["DELETE_TODO"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CLEAR_COMPLETED_TOOS", function() { return _todo_actions__WEBPACK_IMPORTED_MODULE_0__["CLEAR_COMPLETED_TOOS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddTodoAction", function() { return _todo_actions__WEBPACK_IMPORTED_MODULE_0__["AddTodoAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleTodoAction", function() { return _todo_actions__WEBPACK_IMPORTED_MODULE_0__["ToggleTodoAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleAllTodosAction", function() { return _todo_actions__WEBPACK_IMPORTED_MODULE_0__["ToggleAllTodosAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditTodoAction", function() { return _todo_actions__WEBPACK_IMPORTED_MODULE_0__["EditTodoAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteTodoAction", function() { return _todo_actions__WEBPACK_IMPORTED_MODULE_0__["DeleteTodoAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClearCompletedTodosAction", function() { return _todo_actions__WEBPACK_IMPORTED_MODULE_0__["ClearCompletedTodosAction"]; });

/* harmony import */ var _filter_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.actions */ "./src/app/store/actions/filter.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_FILTER", function() { return _filter_actions__WEBPACK_IMPORTED_MODULE_1__["SET_FILTER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetFilterAction", function() { return _filter_actions__WEBPACK_IMPORTED_MODULE_1__["SetFilterAction"]; });





/***/ }),

/***/ "./src/app/store/actions/todo.actions.ts":
/*!***********************************************!*\
  !*** ./src/app/store/actions/todo.actions.ts ***!
  \***********************************************/
/*! exports provided: ADD_TODO, TOGGLE_TODO, TOGGLE_ALL_TODOS, EDIT_TODO, DELETE_TODO, CLEAR_COMPLETED_TOOS, AddTodoAction, ToggleTodoAction, ToggleAllTodosAction, EditTodoAction, DeleteTodoAction, ClearCompletedTodosAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TODO", function() { return ADD_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_TODO", function() { return TOGGLE_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_ALL_TODOS", function() { return TOGGLE_ALL_TODOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_TODO", function() { return EDIT_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_TODO", function() { return DELETE_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_COMPLETED_TOOS", function() { return CLEAR_COMPLETED_TOOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTodoAction", function() { return AddTodoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleTodoAction", function() { return ToggleTodoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleAllTodosAction", function() { return ToggleAllTodosAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTodoAction", function() { return EditTodoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteTodoAction", function() { return DeleteTodoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearCompletedTodosAction", function() { return ClearCompletedTodosAction; });
const ADD_TODO = '[TODO] Add todo';
const TOGGLE_TODO = '[TODO] Toggle todo';
const TOGGLE_ALL_TODOS = '[TODO] Toggle ALL todos';
const EDIT_TODO = '[TODO] Edit todo';
const DELETE_TODO = '[TODO] Delete todo';
const CLEAR_COMPLETED_TOOS = '[TODO] Clear completed todos';
class AddTodoAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_TODO;
    }
}
class ToggleTodoAction {
    constructor(payload) {
        this.payload = payload;
        this.type = TOGGLE_TODO;
    }
}
class ToggleAllTodosAction {
    constructor(payload) {
        this.payload = payload;
        this.type = TOGGLE_ALL_TODOS;
    }
}
class EditTodoAction {
    constructor(payload) {
        this.payload = payload;
        this.type = EDIT_TODO;
    }
}
class DeleteTodoAction {
    constructor(payload) {
        this.payload = payload;
        this.type = DELETE_TODO;
    }
}
class ClearCompletedTodosAction {
    constructor() {
        this.type = CLEAR_COMPLETED_TOOS;
    }
}


/***/ }),

/***/ "./src/app/store/app.reducers.ts":
/*!***************************************!*\
  !*** ./src/app/store/app.reducers.ts ***!
  \***************************************/
/*! exports provided: appReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducers", function() { return appReducers; });
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers */ "./src/app/store/reducers/index.ts");

const appReducers = {
    todos: _reducers__WEBPACK_IMPORTED_MODULE_0__["todoReducer"],
    filters: _reducers__WEBPACK_IMPORTED_MODULE_0__["filterReducer"]
};


/***/ }),

/***/ "./src/app/store/reducers/filter.reducers.ts":
/*!***************************************************!*\
  !*** ./src/app/store/reducers/filter.reducers.ts ***!
  \***************************************************/
/*! exports provided: filterReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterReducer", function() { return filterReducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ "./src/app/store/actions/index.ts");

const initialState = 'all';
function filterReducer(state = initialState, action) {
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_0__["SET_FILTER"]:
            return action.filter;
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/store/reducers/index.ts":
/*!*****************************************!*\
  !*** ./src/app/store/reducers/index.ts ***!
  \*****************************************/
/*! exports provided: todoReducer, filterReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.reducers */ "./src/app/store/reducers/todo.reducers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "todoReducer", function() { return _todo_reducers__WEBPACK_IMPORTED_MODULE_0__["todoReducer"]; });

/* harmony import */ var _filter_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.reducers */ "./src/app/store/reducers/filter.reducers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterReducer", function() { return _filter_reducers__WEBPACK_IMPORTED_MODULE_1__["filterReducer"]; });





/***/ }),

/***/ "./src/app/store/reducers/todo.reducers.ts":
/*!*************************************************!*\
  !*** ./src/app/store/reducers/todo.reducers.ts ***!
  \*************************************************/
/*! exports provided: todoReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todoReducer", function() { return todoReducer; });
/* harmony import */ var _todo_todo_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../todo/todo.model */ "./src/app/todo/todo.model.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/app/store/actions/index.ts");


const initialState = [
    new _todo_todo_model__WEBPACK_IMPORTED_MODULE_0__["Todo"]('Example task number 1'),
    new _todo_todo_model__WEBPACK_IMPORTED_MODULE_0__["Todo"]('Example task number 2'),
    new _todo_todo_model__WEBPACK_IMPORTED_MODULE_0__["Todo"]('Example task number 3')
];
function todoReducer(state = initialState, action) {
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_1__["ADD_TODO"]:
            const todo = new _todo_todo_model__WEBPACK_IMPORTED_MODULE_0__["Todo"](action.payload);
            return [...state, todo];
        case _actions__WEBPACK_IMPORTED_MODULE_1__["TOGGLE_TODO"]:
            return state.map((el) => {
                if (el.id === action.payload) {
                    return Object.assign({}, el, { completed: !el.completed });
                }
                else {
                    return el;
                }
            });
        case _actions__WEBPACK_IMPORTED_MODULE_1__["EDIT_TODO"]:
            return state.map((el) => {
                if (el.id === action.payload.id) {
                    return Object.assign({}, el, { text: action.payload.text });
                }
                else {
                    return el;
                }
            });
        case _actions__WEBPACK_IMPORTED_MODULE_1__["DELETE_TODO"]:
            return state.filter((el) => el.id !== action.payload);
        case _actions__WEBPACK_IMPORTED_MODULE_1__["TOGGLE_ALL_TODOS"]:
            return state.map((el) => {
                return Object.assign({}, el, { completed: action.payload });
            });
        case _actions__WEBPACK_IMPORTED_MODULE_1__["CLEAR_COMPLETED_TOOS"]:
            return state.filter((el) => !el.completed);
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/todo/index.ts":
/*!*******************************!*\
  !*** ./src/app/todo/index.ts ***!
  \*******************************/
/*! exports provided: TodoAddComponent, TodoListComponent, TodoItemComponent, TodoStatusBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo_add_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-add.component */ "./src/app/todo/todo-add.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TodoAddComponent", function() { return _todo_add_component__WEBPACK_IMPORTED_MODULE_0__["TodoAddComponent"]; });

/* harmony import */ var _todo_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-list.component */ "./src/app/todo/todo-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return _todo_list_component__WEBPACK_IMPORTED_MODULE_1__["TodoListComponent"]; });

/* harmony import */ var _todo_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-item.component */ "./src/app/todo/todo-item.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TodoItemComponent", function() { return _todo_item_component__WEBPACK_IMPORTED_MODULE_2__["TodoItemComponent"]; });

/* harmony import */ var _todo_status_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo-status-bar.component */ "./src/app/todo/todo-status-bar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TodoStatusBarComponent", function() { return _todo_status_bar_component__WEBPACK_IMPORTED_MODULE_3__["TodoStatusBarComponent"]; });







/***/ }),

/***/ "./src/app/todo/todo-add.component.ts":
/*!********************************************!*\
  !*** ./src/app/todo/todo-add.component.ts ***!
  \********************************************/
/*! exports provided: TodoAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoAddComponent", function() { return TodoAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/actions */ "./src/app/store/actions/index.ts");
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! subsink */ "./node_modules/subsink/dist/index.js");






let TodoAddComponent = class TodoAddComponent {
    constructor(store) {
        this.store = store;
        this.toggleTodosValue = false;
        this.sub = new subsink__WEBPACK_IMPORTED_MODULE_5__["SubSink"]();
    }
    ngOnInit() {
        this.textInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.sub.add(this.store.select('todos').subscribe((todos) => {
            return todos.length === todos.filter((todo) => todo.completed).length
                ? this.toggleTodosValue = true
                : this.toggleTodosValue = false;
        }));
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    addTodo() {
        if (!this.textInput.invalid) {
            this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_4__["AddTodoAction"](this.textInput.value));
            this.textInput.setValue('');
            this.toggleTodosValue = false;
        }
    }
    toggleAll() {
        this.toggleTodosValue = !this.toggleTodosValue;
        this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_4__["ToggleAllTodosAction"](this.toggleTodosValue));
    }
};
TodoAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todo-add',
        template: /*html*/ `
    <header class="todo-add">
      <h1 class="todo-add__label">My Todos</h1>

      <div class="todo-add__field">
        <label class="todo-add__toggle" for="toggle"
          [ngClass]="{ 'selected': toggleTodosValue }">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="fill" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>
        </label>

        <input class="todo-add__checkbox"
          type="checkbox"
          id="toggle"
          [checked]="toggleTodosValue"
          (change)="toggleAll()">

        <input class="todo-add__input"
          autocomplete="off"
          type="text"
          placeholder="add a new task"
          [formControl]="textInput"
          (keyup.enter)="addTodo()">
      </div>
    </header>
  `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
], TodoAddComponent);



/***/ }),

/***/ "./src/app/todo/todo-filter.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/todo/todo-filter.pipe.ts ***!
  \******************************************/
/*! exports provided: TodosFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosFilterPipe", function() { return TodosFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TodosFilterPipe = class TodosFilterPipe {
    transform(todos, filter) {
        switch (filter) {
            case ('completed'):
                return todos.filter((todo) => todo.completed);
            case ('pending'):
                return todos.filter((todo) => !todo.completed);
            default:
                return todos;
        }
    }
};
TodosFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'todosFilter' })
], TodosFilterPipe);



/***/ }),

/***/ "./src/app/todo/todo-item.component.ts":
/*!*********************************************!*\
  !*** ./src/app/todo/todo-item.component.ts ***!
  \*********************************************/
/*! exports provided: TodoItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemComponent", function() { return TodoItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _todo_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo.model */ "./src/app/todo/todo.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/actions */ "./src/app/store/actions/index.ts");






let TodoItemComponent = class TodoItemComponent {
    constructor(store) {
        this.store = store;
        this.isEditingMode = false;
    }
    ngOnInit() {
        this.textInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.todo.text, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        this.checkInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.todo.completed);
    }
    startEdition() {
        this.isEditingMode = true;
        setTimeout(() => this.textInputRef.nativeElement.select(), 1);
    }
    finishEdition() {
        this.isEditingMode = false;
        if (this.textInput.valid && this.textInput.value !== this.todo.text) {
            this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_5__["EditTodoAction"]({ id: this.todo.id, text: this.textInput.value }));
        }
    }
    toggle() {
        this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_5__["ToggleTodoAction"](this.todo.id));
    }
    delete() {
        this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteTodoAction"](this.todo.id));
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _todo_model__WEBPACK_IMPORTED_MODULE_2__["Todo"])
], TodoItemComponent.prototype, "todo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('textInputRef', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], TodoItemComponent.prototype, "textInputRef", void 0);
TodoItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
], TodoItemComponent);



/***/ }),

/***/ "./src/app/todo/todo-list.component.ts":
/*!*********************************************!*\
  !*** ./src/app/todo/todo-list.component.ts ***!
  \*********************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! subsink */ "./node_modules/subsink/dist/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/actions */ "./src/app/store/actions/index.ts");





let TodoListComponent = class TodoListComponent {
    constructor(store) {
        this.store = store;
        this.todoItems = [];
        this.subs = new subsink__WEBPACK_IMPORTED_MODULE_2__["SubSink"]();
    }
    ngOnInit() {
        this.subs.add(this.store.subscribe((state) => {
            this.todoItems = state.todos;
            this.currentFilter = state.filters;
        }));
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
    trackByFn(_index, id) {
        return id;
    }
    clearCompletedTasks() {
        this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_4__["ClearCompletedTodosAction"]());
    }
};
TodoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todo-list',
        template: /*html*/ `
    <ng-container *ngIf="(todoItems | todosFilter: currentFilter).length; else noItems">
      <ul class="todo-list">
        <app-todo-item [todo]="todo"
          *ngFor="let todo of (todoItems | todosFilter: currentFilter); trackBy: trackByFn">
        </app-todo-item>
      </ul>

      <footer class="text-right">
        <button class="clear-button button"
          (click)="clearCompletedTasks()"
          *ngIf="(todoItems | todosFilter: 'completed').length"
          type="button">
          Clear completed tasks
        </button>
      </footer>
    </ng-container>

    <ng-template #noItems>
      <section class="no-items" #noItems>
        <svg class="no-items__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8 17c-.55 0-1-.45-1-1v-5c0-.55.45-1 1-1s1 .45 1 1v5c0 .55-.45 1-1 1zm4 0c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v8c0 .55-.45 1-1 1zm4 0c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1z"/></svg>
        <p class="no-items__label">
          You don't have {{ currentFilter === 'all' || !todoItems.length ? '' : currentFilter }} tasks
        </p>
      </section>
    </ng-template>
  `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
], TodoListComponent);



/***/ }),

/***/ "./src/app/todo/todo-status-bar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/todo/todo-status-bar.component.ts ***!
  \***************************************************/
/*! exports provided: TodoStatusBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoStatusBarComponent", function() { return TodoStatusBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/actions */ "./src/app/store/actions/index.ts");
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! subsink */ "./node_modules/subsink/dist/index.js");





let TodoStatusBarComponent = class TodoStatusBarComponent {
    constructor(store) {
        this.store = store;
        this.validFilters = ['all', 'pending', 'completed'];
        this.subs = new subsink__WEBPACK_IMPORTED_MODULE_4__["SubSink"]();
    }
    ngOnInit() {
        this.subs.add(this.store.subscribe((state) => {
            this.currentFilter = state.filters;
            this.completedPercentage = this.getCompletedPercentage(state.todos);
            this.todosQty = state.todos.length;
        }));
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
    setFilter(filter) {
        this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_3__["SetFilterAction"](filter));
    }
    getCompletedPercentage(todos) {
        const totalTodos = todos.length;
        const completedTodos = todos.filter((el) => el.completed).length;
        return todos.length ?
            Math.floor(completedTodos / totalTodos * 100) : 0;
    }
};
TodoStatusBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todo-status-bar',
        template: /*html*/ `
    <div class="todo-status-bar" *ngIf="todosQty">
      <button class="todo-status-bar__button button"
        [ngClass]="{ 'active': currentFilter === filter }"
        (click)="setFilter(filter)"
        *ngFor="let filter of validFilters">
        {{ filter }}
      </button>

      <p class="todo-status-bar__status">
        <strong>{{ completedPercentage }}%</strong> completed
      </p>
    </div>
  `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
], TodoStatusBarComponent);



/***/ }),

/***/ "./src/app/todo/todo.model.ts":
/*!************************************!*\
  !*** ./src/app/todo/todo.model.ts ***!
  \************************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
class Todo {
    constructor(text) {
        this.id = Math.random();
        this.text = text.charAt(0).toUpperCase() + text.slice(1);
        this.completed = false;
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jorgebarron/Development/ngrx-todo-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map