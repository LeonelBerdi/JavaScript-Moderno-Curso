console.warn('While');
console.log ( '------------ condicion ------------');

const carro = ['Ford', 'mazda', 'Honda', 'Toyota'];

let i = 0;

while( i < carro.length ) {
    console.log ( carro[i]);
    i++;    //i = i + 1
//  i += 2  incrementa de dos en dos.   
//  i += 3  incrementa de 3 en 3.
//  i += 4  incrementa de 4 en 4.
};

// otra forma de parar un ciclo es que llegue un valor considerado false
// undefined
// null
// false
// Como en los arreglos si se solicita una posicion que no existe devuelve "undefined" podemos hacer lo siguiente:
console.log ( '------------ falsy ------------');

i = 0;
while( carro[i] ) {         //como las posiciones que retornan un valor son truty seguira hasta el primer falsy "undefined".
    console.log ( carro[i]);
    i++;    
};


// AÑADO EL BREAK
console.log ( '------------ break ------------');
i = 0;
while( carro[i] ) {
    if ( i === 1) {
        break;
    };
    console.log ( carro[i]);
    i++;    
};

// AÑADO EL CONTINUE
console.log ( '------------ CONTINUE ------------');
i = 0;

while( carro[i] ) {
    if ( i === 1) {
        i++;
        continue;           //INDICA AL PROGRAMA QUE A PESAR DE CUMPLIR LA CONDICION EN LUGAR DE SALIR O PARAR CONTINUE CON LA SIGUIENTE LINEA
    };
    console.log ( carro[i]);
    i++;    
};

// CICLO DO WHILE
console.warn('Do While');
// La diferencia entre el while y el do while es que el do while va a ejecutar el codigo al menos una vez
i = 0;

do {                //El codigo se va a ejecutar al menos una vez 
    console.log( carro [i]);
    i++;
} while ( carro[i] );         //El codigo se seguira ejecutando hasta que la condicion sea verdadera.












console.log('Fin de programa');