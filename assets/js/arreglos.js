/*
const arr = new Array(10); //inicializo un array de 10 elementos
const arr = []; // inicializao un array sin definir la cantidad de elementos o vacio
console.log(arr);
*/

let videoJuegos = ['Mario 3','Megaman','Chrono Trigger'];
//console.log({ videoJuegos });
console.log( videoJuegos[0] );

/* si lo pongo en varias lineas el codigo se lee mas facil
let arregloCosas = [ true, 123,'Fernando', 1+2,];
*/

let arregloCosas = [
    true,           //Booliano
    123,            //number
    'Fernando',     //string
    1+2,            //operacion
    function(){},   //es una funcion
    ()=>{},         //es una arrow function o funcion de flecha o lamda
    { a: 1},         //es un objeto literal 
    videoJuegos,     //array
    ['X', 'Megaman', 'Zero', 'Dr. Light',[
        'Dr. Willy',
        'Woodman'
    ]]
];

console.log({ arregloCosas });
console.log( arregloCosas[0] );
console.log( arregloCosas[2] );

//solucion de leo arreglo dentro de arreglo
console.log( arregloCosas[8] ); 
let personajes = arregloCosas[8];
console.log( personajes[3] );


// solucion de clase
console.log( arregloCosas[8][3] ); //obtener la 4 posicion de un arreglo que esta dentro de otro!!
console.log( arregloCosas[8][4][1] );