/**
 *  2C = Two of Club (Tréboles)
 *  2D = Two of Diamond (Diamantes)
 *  2H = Two of Hearts (Corazones)
 *  2S = Two of Spades (Espadas)
 */

let deck         = [];
const tipos      = ['C','D','H','S']; // Club - Diamond - Hearts - Spades 
const especiales = ['A','J','Q','K']; // AS - JOKER - QUEEN - KING 

// Esta funcion crea una nueva baraja.
const crearDeck= () => {

    for ( let i = 2; i <=10 ; i++ ) {
        for( let tipo of tipos ) {
            deck.push(i + tipo);
        }
    };
    // SOLUCION DE CLASE
    for( let tipo of tipos ) {
        for ( let esp of especiales ) {
            deck.push(esp + tipo);
        } 
    };
    /* SOLUCION DE LEONEL
    for ( let especial of especiales ) {
        for( let tipo of tipos ) {
        deck.push(especial + tipo);
        }
    };
    */
//  console.log( deck );            Imprimir en consola el mazo ordenado.
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
};

crearDeck();


// Esta funcion me permite tomar una carta
const pedirCarta = () => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    };

    const carta = deck.pop();
    
    console.log( deck );
    console.log({ carta });
    return carta;
};


/*
deck = [];                                      Para comrpobar que el trow funciona inicializo el mazo sin cartas
pedirCarta();

const totalCartas = deck.length;                Otra opcion para comprobar el trow es vaciar el mazo con un for de cartas
for ( let i = 0; i < totalCartas +1 ; i ++) {
    pedirCarta();
};
*/




