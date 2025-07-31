

let a= 3;


if ( a >= 10 ) {
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menor a 10');
};

const hoy = new Date(); // new me permite crear una nueva instancia o un nuevo objeto 
                        // es lo mismo que new object() o new object{}.
                        // Date() lo que hae es obtener la informacion del momento actual
console.log( hoy );     // imprimo en pantalla la fecha

let dia = hoy.getDay();    //0: Domingo, 1: lunes, 2: martes.....

console.log({ dia });

if ( dia === '0' ) {
    console.log('hoy es domingo');
} else {
    console.log('No es domingo');
};

//COMPROBACION SI UNA CONDICION FUNCIONA COMO QUIERO VER EL RESULTADO
console.log(dia === '0');   


// ELSE IF

if ( dia === 0 ) {
    console.log('hoy es domingo');
} else if ( dia === 1) {
    console.log('hoy es lunes');
} else if (dia === 2 ) {
    console.log('hoy es Martes');
}else if (dia === 3 ) {
    console.log('hoy es Miercoles');
}else if (dia === 4 ) {
    console.log('hoy es Jueves');
}else if (dia === 5 ) {
    console.log('hoy es Viernes');
}else if (dia === 6 ) {
    console.log('hoy es Sabado');
}else {
    console.log('dia de la semana valor invalido');
};

// Ejercicio sin usar If Else, o Switch, unicamente objetos mostrar el dia de la semana

let dia2 = 3; // 0:domingo, 1:lunes .....

let diaLetras = ['Domingo' ,'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

console.log('Hoy es el dia:', diaLetras[dia2]);

console.log('Fin de programa');

// solucion con objetos

const diaLetras2 = {
   0 : 'Domingo',
   1 : 'Lunes',
   2 : 'Martes',
   3 : 'Miercoles',
   4 : 'Jueves',
   5 : 'Viernes',
   6 : 'Sabado',
};

console.log('Hoy es el dia:', diaLetras2[dia2]);

//QUE PASA SI EL VALOR DE dia no es 0-6 me devuelve "undefined"
//SOLUCION
let dia3 = 8; // 0-6 (Domingo...Sabado), 8 no es un dia valido
console.log('Hoy es el dia:', diaLetras2[dia3] || 'NO DEFINIDO'); // el operador "or" ("||"), va a preguntar si la operacion anterior tiene un valor si es asi no se va a ejecutar nunca pero si el resultado es "null" o "undefined" se va a ejecutar.

// solucion con objetos y funciones 
const diaLetras3 = {
   0 : ()=> 'Domingo - 0',
   1 : ()=> 'Lunes - 1',
   2 : ()=> 'Martes - 2',
   3 : ()=> 'Miercoles - 3',
   4 : ()=> 'Jueves - 4',
   5 : ()=> 'Viernes - 5',
   6 : ()=> 'Sabado - 6',
};

console.log('Hoy es el dia:', diaLetras3[dia2]); // aqui apunto a la funcion pero no al resueltado 
console.log('Hoy es el dia:', diaLetras3[dia2]()); // aqui ejecuto la funcion le mando un parametro vacio