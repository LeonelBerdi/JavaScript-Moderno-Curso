// FUNCION EL MAYOR
const elMayor = (a , b) => {
    return ( a >= b ) ? a : b;
};

// reducir funcion de flecha con un unico return quito return, {} y ;
const elMayorFlecha = (a , b) => ( a >= b ) ? a : b; 
const elMayorFlecha2 = (a , b) => a >= b ? a : b; // se puede quitar los () pero es mas dificil de leer


// FUNCION MEMBRESIA

const tieneMembresia = ( miembro ) => (miembro) ? '2 Dolares' : '10 Dolares';

console.log ( elMayor(20, 15));
console.log ( elMayorFlecha(20, 15));
console.log ( elMayorFlecha2(20, 15));
console.log ( tieneMembresia( false ));

// USO DE OPERADORES TERNARIOS EN ARREGLOS U OBJETOS
// SE UTILIZA PARA LA CREACION DE ARREGLOS U OBJETOS CON UNA CONDICION IMPLICITA 

const amigo = false;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'thor' : 'Loki',    //Comprueba el valor de amigo si es true incluye a thor y si es false a Loki
                                //Este tipo de condicionales necesita si o si tener un valor para true y otro para false
    (() => 'Nick Fury')(),      //Esto es una funcion autoinvocada se define y se consume en el momento y no se le da ningun argumento.
    elMayor(10,15),
];

console.log( amigosArr );

// OPERADORES TERNARIOS MULTIPLES CONDICIONES
//ejemplo graduacion de notas del cole
const nota = 90;            //es la nota del alumno
const grado = ( nota >= 95 ) ? 'A+' :
              ( nota >= 90 ) ? 'A'  :
              ( nota >= 85 ) ? 'B+' :
              ( nota >= 80 ) ? 'B'  :
              ( nota >= 75 ) ? 'C+' :
              ( nota >= 70 ) ? 'C'  :'F';

console.log({ nota, grado });


