let juegos = ['Zelda','Mario','Metroid','Chrono'];
console.log('Largo:', juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];
console.log('primero: ',primero,' ultimo: ',ultimo);

// solucion de profe para impresion
console.log( { primero, ultimo });

juegos.forEach( (elemento, indice, arr) =>{
    console.log ({ elemento, indice, arr})
});

let nuevaLongitud = juegos.push ('F-Zero'); // añade al final del arreglo y me devuelve el nuemro de la ultima posicion
console.log({ nuevaLongitud });
console.log({ nuevaLongitud, juegos });
console.log( juegos[juegos.length - 1] );

/* solucion leo
juegos.unshift('Fire Emblem');
console.log( juegos[0] );
*/
//solucion clase
nuevaLongitud = juegos.unshift('Fire Emblem'); // añade al principio y me devulve un valor "0"
console.log({ nuevaLongitud, juegos });
console.log( juegos[0] );

//eliminar el ultimo valor del arreglo y lo devuelve
let juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos });
console.log( juegoBorrado );


let pos = 1;
console.log( {juegos}, juegos );
let juegosBorrados = juegos.splice( pos, 2); // elimina a partir de la posicion indicada la cantidad de elementos indicado
console.log({ juegosBorrados, juegos });
console.log( juegosBorrados );
console.log( juegos );

let metroidIndex = juegos.indexOf('Metroid');
console.log( metroidIndex );
console.log( juegos[metroidIndex] );