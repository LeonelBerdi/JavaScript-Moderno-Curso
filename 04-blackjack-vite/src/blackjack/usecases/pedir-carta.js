// Esta función me permite tomar una carta

/**
 * Esta función me permite tomar una carta
 * @param { Array<String> } deck es un arreglo de string Ejemplo deck[ (52) ['10H', '2S', '6H',...]
 * @returns {String} carta retorna una carta del deck Ejemplo '10H'
 */

export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}