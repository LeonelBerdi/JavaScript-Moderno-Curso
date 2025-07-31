
let nombre = 'Peter Parker';    // comillas simples ESTE ES EL MAS RECOMANDADO USAR

console.log ( nombre );

nombre = 'Ben parker'; 
console.log ( nombre );

nombre = "Tía May";             // Comillas dobles
console.log ( nombre );

nombre = `Miles Morales`;       //Back tips estos tienen mas caracteristicas cuidado
console.log ( nombre );

console.log( typeof nombre );

// cambio el tipo de la variable 
nombre = 123456 ; 
console.log ( nombre );
console.log( typeof nombre );

// booleano no puede ir el true o false en mayusculas sino piensa que es una variable llamada "False"!!!
let esMarvel = true;
esMarvel = false; 
console.log ( esMarvel );
console.log( typeof esMarvel );

// tipo number
let edad = 33;
console.log ( edad );
console.log( typeof edad );

// undefined
let superPoderDeSpiderMan;
console.log( typeof superPoderDeSpiderMan );

// tipo null
let soyNull = null;
console.log( typeof soyNull );

// symbol
let symbol1 = Symbol('a');
let symbol2 = Symbol('a');
console.log( typeof symbol1 );
console.log( symbol1 === symbol2 );
