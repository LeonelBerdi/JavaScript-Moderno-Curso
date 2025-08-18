import html from './app.html?raw';
import todoStore from '../store/todo.store';
import { renderTodos } from './use-cases';

const elementIDs = {
    TodoList: '.todo-list',


}

/**
 * 
 * @param {String} elementId 
 */
export const App = ( elementId ) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        renderTodos( elementIDs.TodoList, todos );
        
    }


    //Cuando la Funcion App() se llama
    (() => {
        const app = document.createElement('div');
        /* Comento porque ahora asigno el HTML
        app.innerHTML = '<h1>Hola Mundo<h1>';
        */
        app.innerHTML = html;   //Asigno a la funcion mi HTML importado
        document.querySelector(elementId).append( app );
        displayTodos();
    })();








}