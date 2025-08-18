import { Todo } from '../models/todo.model.js';
import { createTodoHTML } from './index.js';




/**
 * 
 * @param {String} elementId 
 * @param {Todo} todos 
 */



export const renderTodos = ( elementId, todos =[] ) => {


    //TODO: referencia
    const element = document.querySelector( elementId );

    todos.forEach( todo => {
        element.append( createTodoHTML(todo) )
    });


}