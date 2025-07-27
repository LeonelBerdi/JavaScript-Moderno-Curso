// Informacion pasada por VALOR

let a = 10;
let b = a;
a = 30;

console.log({ a, b });

// Informacion pasada por REFERENCIA en Objetos

let juan = { nombre: 'juan'};
//let ana  = juan;                // SOLUCION PONER LLAVES y ... "spread"
let ana  = { ...juan }; 

ana.nombre = 'ana'
console.log({ juan, ana });

// Informacion pasado por referencia en funciones

const cambiaNombre = ({ ...persona }) => {
    persona.nombre = 'tony';
    return persona
};

let peter = { nombre: 'peter'};
let tony  = cambiaNombre( peter );

console.log({ peter, tony});

// Informacion pasado por referencia en Arreglos
/*
const frutas = ['Manzana', 'Pera', 'Piña'];

const otrasFrutas = [ ...frutas]; // indico que es un arreglo y realizo el spread "..." 

const otrasFrutas2 = frutas.slice(); //el slice esun  metodo de los arreglos que corta un arreglo y me regresa los elementos especificados, pero sino envio ningun argumento me regresa todo el arreglo en un arreglo nuevo y se rompe la relacion. 

otrasFrutas.push('Mango');
otrasFrutas2.push('Sandia');

console.table( { frutas, otrasFrutas, otrasFrutas2 } );
*/
// MEDICIONES DE TIEMPO EN REALIZAR TAREAS PARA VER LA EFICIENCIA

const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('slice');
const otrasFrutas2 = frutas.slice(); //el slice es un metodo de los arreglos que corta un arreglo y me regresa los elementos especificados, pero sino envio ningun argumento me regresa todo el arreglo en un arreglo nuevo y se rompe la relacion. 
console.timeEnd('slice');

console.time('spread');             // INICIA UN CONTADOR DE TIEMPO
const otrasFrutas = [ ...frutas];   // indico que es un arreglo y realizo el spread "..." 
console.timeEnd('spread');          // FINALIZA EL CONTADOR DE TIEMPO



otrasFrutas.push('Mango');
otrasFrutas2.push('Sandia');

console.table( { frutas, otrasFrutas, otrasFrutas2 } );