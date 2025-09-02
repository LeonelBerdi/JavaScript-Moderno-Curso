

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingbadApp =(element) => {
    /* Compruebo la exportacion y que recibo el elemento html donde quiero renderizar
    console.log('Hola Mundo');
    console.log( element );
    */
    document.querySelector('#app-title').innerHTML = 'Breakingbad App';
    element.innerHTML ='loading...';
}