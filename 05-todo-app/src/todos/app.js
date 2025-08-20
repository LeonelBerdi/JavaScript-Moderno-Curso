import html from './app.html?raw';
import todoStore from '../store/todo.store';
import { renderTodos } from './use-cases';

const elementIDs = {
    ClearCompletedButton: '.clear-completed',
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',


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

    // referencias HTML
    const newDescriptionInput = document.querySelector( elementIDs.NewTodoInput );
    const todoListUL = document.querySelector( elementIDs.TodoList );
    const ClearCompletedButton = document.querySelector( elementIDs.ClearCompletedButton );

    //Listeners
    newDescriptionInput.addEventListener('keyup', ( event ) => {
        /* Compruebo la informacion del evento que recibo 
        console.log(event);
        console.log(event.target.value);
        */
       if ( event.keyCode !== 13 ) return; //esto significa que cualquier tecla presionada va a sacarme de la funcion no va a continuar la ejecucion
       
       if ( event.target.value.trim().lenght === 0 ) return;

       todoStore.addTodo( event.target.value );
       displayTodos();
       event.target.value = '';
    });

    todoListUL.addEventListener('click', (event) => {
        const element = event.target.closest('[data-id]');
        /* 
        console.log(event.target);
        console.log(element.getAttribute('data-id'));
        */
        todoStore.toggleTodo( element.getAttribute('data-id') );
        displayTodos();
    });

    todoListUL.addEventListener('click', (event) => {
           
        const isDestroyElement = event.target.className === 'destroy';
        /* Compruebo el valor booliano de la variable
        console.log( { isDestroyElement });
        */
        const element = event.target.closest('[data-id]');
        if ( !element || !isDestroyElement ) return;
               
        todoStore.deleteTodo( element.getAttribute('data-id') );
        displayTodos();
    });

    ClearCompletedButton.addEventListener('click', () => {
        todoStore.deleteCompleted();
        displayTodos();
    });



};