import {Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';
import './styles.css';



export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHtml( todo ));
// const tarea =  new Todo('Aprender JS!!');

// console.log(todoList)

// crearTodoHtml( tarea );
// // localStorage.setItem('mi-key', 'ABC123');
// // sessionStorage.setItem()