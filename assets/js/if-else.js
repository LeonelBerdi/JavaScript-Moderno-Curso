

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



console.log('Fin de programa');

