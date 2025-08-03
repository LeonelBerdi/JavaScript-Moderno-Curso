/**
 *  2C = Two of Club (Tréboles)
 *  2D = Two of Diamond (Diamantes)
 *  2H = Two of Hearts (Corazones)
 *  2S = Two of Spades (Espadas)
 */

let deck         = [];
const tipos      = ['C','D','H','S']; // Club - Diamond - Hearts - Spades 
const especiales = ['A','J','Q','K']; // AS - JOKER - QUEEN - KING 

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

    console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
};

crearDeck();
