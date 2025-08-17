import html from './app.html?raw';

/**
 * 
 * @param {String} elementId 
 */
export const App = ( elementId ) => {

    //Cuando la Funcion App() se llama
    (() => {
        const app = document.createElement('div');
        /* Comento porque ahora asigno el HTML
        app.innerHTML = '<h1>Hola Mundo<h1>';
        */
        app.innerHTML = html;   //Asigno a la funcion mi HTML importado
        document.querySelector(elementId).append( app );
    })();








}