// Referencias en el html

import { Todo, TodoList } from "../classes";

const divTodoList = document.querySelector('.todo-list');
const txtInput    = document.querySelector('.new-todo');

export const crearTodoHtml = ( todo ) => {

    const htmlTodo = `
    <li class="${(todo.completado) ? 'completed' : ''}" data-id="${ todo.id }">
        <div class="view">
           <input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked' : '' }>
             <label>${ todo.tarea }</label>
              <button class="destroy"></button>
        </div>
            <input class="edit" value="Create a TodoMVC template">
    </li>`


    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append( div.firstElementChild ); //dejar el div es mala practica en una lista por lo que se inserta solo el li
    return div.firstElementChild; 
} 
// Eventos

txtInput.addEventListener('keyup', ( event ) => {
    // console.log(event);
    // console.log(event.keyCode);
     console.log(txtInput.value);
    
    if(event.keyCode === 13 && txtInput.value.lenght > 0){
        console.log(txtInput.value);
        const nuevoTodo = new Todo( txtInput.value );
        TodoList.nuevoTodo( nuevoTodo );
        crearTodoHtml( nuevoTodo );
        console.log(TodoList);
    }
});