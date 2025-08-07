const miModulo = (() => {
    'use strict'


    let deck         = [];
    const tipos      = ['C','D','H','S'], 
          especiales = ['A','J','Q','K']; 
    
    let puntosJugadores = [];

    // Referencias del HTML
    const btnNuevo   = document.querySelector('#btnNuevo'),
          btnPedir   = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener');
    
    const divCartasJugadores = document.querySelectorAll('.divCartas'),
          puntosHtml = document.querySelectorAll('small');
          


    // Esta funcion inicializa el juego
    const inicializarJuego = ( numjugadores = 2 ) => {
        deck = crearDeck();

        puntosJugadores = [];
        for( let i = 0; i< numjugadores; i++ ) {
            puntosJugadores.push(0);
        };

        puntosHtml.forEach( elem => elem.innerText = 0 );
        divCartasJugadores.forEach( elem => elem.innerHTML = '' );
            
        btnPedir.disabled = false;
        btnDetener.disabled = false;
  
    };

    // Esta funcion crea una nueva baraja.
    const crearDeck= () => {

        deck = [];    
        for ( let i = 2; i <=10 ; i++ ) {
            for( let tipo of tipos ) {
                deck.push(i + tipo);
            }
        };
        
        for( let tipo of tipos ) {
            for ( let esp of especiales ) {
                deck.push(esp + tipo);
            } 
        }
        return _.shuffle( deck );
    };

    // Esta funcion me permite tomar una carta
    const pedirCarta = () => {

        if ( deck.length === 0 ) {
            throw 'No hay cartas en el deck';
        };
        return deck.pop();
    };
   
    const valorCarta = ( carta ) => {                       //FUNCION DE VALOR CARTAS RESUMIDA UTILIZO 2 TERNARIAS
        const valor = carta.substring(0, carta.length-1);
        return ( isNaN( valor )) ?                          //1 TERNARIA COMPRUEBO SI VALOR NO ES UN NUMERO
                ( valor === 'A') ? 11 : 10                  //EN CASO AFIRMATIVO HAGO UNA SEGUNDA TERNARIA PARA VER SI ES UNA "A" DEVUELVO 11 SINO DEVUELVO 10.
                : valor * 1;                                //EN CASO QUE LA PRIMERA TERNARIA SEA FALSE MULTIPLICO EL VALOR * 1 PARA CONVERTIRLO DE STRING A NUMBER.
    };

    // Turno: 0 = primer jugador y el ultimo sera la computadora
    const acumularPuntos = ( carta, turno ) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta ( carta );
        puntosHtml[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    };

    const crearCarta = ( carta, turno ) => {

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`;
        imgCarta.classList.add('carta');
        divCartasJugadores[turno].append( imgCarta );

    };

    const determinarGanador = () => {

        const [ puntosMinimos, puntosComputadora ] = puntosJugadores;

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
        }, 100 );

    }

    // Turno de la Computadora
    const turnoComputadora = ( puntosMinimos ) => {

        let puntosComputadora = 0;

        do {
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos( carta, puntosJugadores.length - 1 );
            crearCarta( carta, puntosJugadores.length -1 );
            

        } while( ( puntosComputadora < puntosMinimos ) && ( puntosMinimos <= 21 ) );

        determinarGanador();
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
        const puntosJugador = acumularPuntos(carta, 0);
        
        crearCarta( carta, 0 );
        
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
        turnoComputadora( puntosJugadores[0] );
    });


    // btnNuevo.addEventListener('click', () => {
        
    //     inicializarJuego();
        
    // });

    return {
        nuevoJuego: inicializarJuego
    };

})();