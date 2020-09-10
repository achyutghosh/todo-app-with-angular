import { Injectable } from '@angular/core';
import { of } from "rxjs";
import { Todo } from "./../model/Todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[];
  constructor() { 
    this.todos = [];
    // this.todos = [
    //   {
    //     id: '1', 
    //     title: 'Test 1',
    //     isCompleted: true,
    //     date: new Date(),
    //   },
    //   {
    //     id: '2',
    //     title: 'Test 2',
    //     isCompleted: false,
    //     date: new Date(),
    //   },
    //   {
    //     id: '3',
    //     title: 'Test 3',
    //     isCompleted: true,
    //     date: new Date(),
    //   }
    // ];
  }

  // Read todo
  getTodos() {
    // using of we make the simple todo array to observable array
    return of(this.todos);
  }

  // Add todos
  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  // 
  changeStatus(todo: Todo) {
    this.todos.map( singleTodo => {
      if(singleTodo.id == todo.id) {
        todo.isCompleted = !todo.isCompleted;
      }
    })
  }

  // Remove todos
  deleteTodo(todo: Todo) {
    const indexofTodo = this.todos.findIndex(
      (currentObj) => currentObj.id == todo.id
    );
    this.todos.splice(indexofTodo, 1);
  }

}
