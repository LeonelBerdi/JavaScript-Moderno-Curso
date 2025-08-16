// Turno de la computadora

import { pedirCarta, valorCarta, crearCartaHTML } from "./index.js";

/**
 * Turno de la computadora
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar valor de tipo Number Ejemplo: 1,2,3,...21
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos
 * @param {divCartasComputadora} divCartasComputadora elemento HTML para mostrar las cartas
 * @param {Array<string>} deck es un arreglo de string Ejemplo deck[ (52) ['10H', '2S', '6H',...]
 */

export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => { //añado por defecto que sino viene un dato el deck este vacio esto genera un error al ejecutar la funcion pedir carta !!

    if ( !puntosMinimos ) throw new Error('Puntos minimos son necesarios'); //se añade validacion para que tengan que enviarme los puntos
    if ( !puntosHTML ) throw new Error('Argumento puntosHTML son necesarios');
    
    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        /* REFACTORIZADO
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');
        */
        
        const imgCarta = crearCartaHTML( carta );
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}