/**
 *  2C = Two of Club (Tréboles)
 *  2D = Two of Diamond (Diamantes)
 *  2H = Two of Hearts (Corazones)
 *  2S = Two of Spades (Espadas)
 */

let deck         = [];
const tipos      = ['C','D','H','S']; // Club - Diamond - Hearts - Spades 
const especiales = ['A','J','Q','K']; // AS - JOKER - QUEEN - KING 
let puntosJugador = 0,
    puntosComputadora = 0;


// Referencias del HTML
const btnNuevo   = document.querySelector('#btnNuevo');
const btnPedir   = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const puntosHtml = document.querySelectorAll('small');
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

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
    /* QUITO ESTOS AVISOS 
    console.log( deck );
    console.log({ carta });
    */
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

const valorCartaE = ( carta ) => {                      //EXPLICACION DE COMO PEDIR CARTAS

//  const valor = carta[0];                             //saco la primera posicion de un string pero el numero 10 tiene 2 valores como lo resuelvo??
    const valor = carta.substring(0, carta.length-1);   //el metodo substring me permite extrar las posiciones que quiero del string le indic la inicial y la final como no quiero la letra le resto uno al valor del lenght, este metodo me devuelve un valor de tipo "string" no de tipo "number"
    let puntos = 0;                                     //incializon una variable para guardar el valor en puntos de la carta que he sacado de la baraja
    if ( isNaN ( valor ) ) {                            //"isNAN" "is not a numbre evalua el valor recibido y retorna true si no es un numero
        console.log('No es un numero');
        puntos = ( valor === 'A' ) ? 11 : 10;
    } else {
        console.log('Es un numero');
        puntos = valor * 1;                             //Tengo que convertir el valor de la variable de string a un valor de tipo number, una de las formas es multiplicar el valor * 1;
    };
    console.log ({ valor });                            // ejemplo valorCarta('10D'); entonces valor = 10
    console.log ( puntos );
};

// valorCartaE('AD');                                   //PRUEBA DE LA FUNCION VALOR CARTAS EXPLICADA


const valorCarta = ( carta ) => {                       //FUNCION DE VALOR CARTAS RESUMIDA UTILIZO 2 TERNARIAS
    const valor = carta.substring(0, carta.length-1);
    return ( isNaN( valor )) ?                          //1 TERNARIA COMPRUEBO SI VALOR NO ES UN NUMERO
            ( valor === 'A') ? 11 : 10                  //EN CASO AFIRMATIVO HAGO UNA SEGUNDA TERNARIA PARA VER SI ES UNA "A" DEVUELVO 11 SINO DEVUELVO 10.
            : valor * 1;                                //EN CASO QUE LA PRIMERA TERNARIA SEA FALSE MULTIPLICO EL VALOR * 1 PARA CONVERTIRLO DE STRING A NUMBER.
};

// console.log (valorCarta('9D'));                      //PRUEBA DE LA FUNCION VALOR CARTAS RESUMIDA EXPLICADA
/* QUITO AVISOS
const valor = valorCarta( pedirCarta() );
console.log ({ valor });
*/
// Turno de la Computadora
const turnoComputadora = ( puntosMinimos ) => {

   do {
        const carta = pedirCarta();
        console.log('carta computadora:',carta);
        puntosComputadora = puntosComputadora + valorCarta ( carta );
        console.log('puntos computadora:',puntosComputadora);
        puntosHtml[1].innerText = puntosComputadora;

        // <img class="carta" src="assets/cartas/3C.png">   texto que se debe añadir para que se muestre la carta por pantalla
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`;
        imgCarta.classList.add('carta');
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        };


   } while( ( puntosComputadora < puntosMinimos ) && ( puntosMinimos <= 21 ) );

   setTimeout(() => {                           //funcion de Java para decirle que antes de ejecutas este codigo espere "XX" milesimas de segundo

       if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana');
        } else if (puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora gana');
        };
   }, 50 );
};


// Eventos
/*
btnPedir.addEventListener('click', function() {         //Esto hace que se compruebe un evento que es el click en el boton indicado
                                                          Basicamente le estoy diciendo que cuando se haga click en el boton indicando se va a disparar la accion indicada entre las llaves
    console.log('click');                               //Coloca el concole log para comprobar que cada vez que se presiona el boton se ejecuta la funcion y aparece el click
});
*/
                                                        //La funcion "function() {}" que esta colocada como un argumento en la funcion se conoce como callback
btnPedir.addEventListener('click', () => {              //Puede ser una funcion tradicional o una funcion de flecha la envio como argumento del metodo ".addEventListener('click', () => {})"

    const carta = pedirCarta();
    console.log(carta);
    puntosJugador = puntosJugador + valorCarta ( carta );
    console.log(puntosJugador);
    puntosHtml[0].innerText = puntosJugador;

    // <img class="carta" src="assets/cartas/2C.png">   texto que se debe añadir para que se muestre la carta por pantalla
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append( imgCarta );

    if ( puntosJugador > 21 ) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador );
    } else if ( puntosJugador === 21 ) {
        console.warn('21, genial!');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador );
    };


});


btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora( puntosJugador );

});


btnNuevo.addEventListener('click', () => {
    
    console.clear();
    deck = [];
    deck = crearDeck();

    puntosJugador = 0;
    puntosComputadora = 0;

    puntosHtml[0].innerText = 0;
    puntosHtml[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';
        
    btnPedir.disabled = false;
    btnDetener.disabled = false;
    
});