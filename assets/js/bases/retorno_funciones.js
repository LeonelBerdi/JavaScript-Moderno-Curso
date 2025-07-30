/* AÑADIR LA INSTRUCCION RETORNO A UNA FUNCION
function saludar ( nombre ) {   
    console.log( arguments );            
    console.log('Hola '+ nombre);
    return 1;                       //termina la ejecucion de la funcion y devuelve a la linea de codigo el valor de retorno en este caso 1.
};

const retornoDeSaludar = saludar( 'Fernando', 40, true, 'Costa Rica'); //1
console.log( { retornoDeSaludar });
*/

//EJEMPLO LEONEL Y PRUEBAS
/* EJEMPLO DE LINEA DESPUES DE RETURN
function saludar ( nombre ) {
    console.log('Hola '+ nombre);
    return 1;
    
    console.log('Soy un código que esta despues del return') // esta linea de codigo no se ejecuta nunca 
};
const retornoDeSaludar = saludar( 'Fernando' );
console.log( { retornoDeSaludar });

*/

/* TIPOS DE RETORNO
    return 1;                                //valor numerico
    return 'hola';                           //string
    return [ 1, 2, 3, 'cuatro']              //array
    return true;                             //booleano
    return { Nombre:'Tony Stark', Edad: 40}; //objeto
*/

// EJEMPLO DEVOLUCION DE ARRAY 
function saludar ( nombre ) {
    console.log('Hola '+ nombre );
    return [ 1, 2, 3, 'cuatro'];     
};

const retornoDeSaludar = saludar( 'Fernando' );
console.log( retornoDeSaludar[0], retornoDeSaludar [3] );

//EJEMPLO FUNCION SUMAR

function sumar( a, b) {
    return a + b;
};
console.log( sumar (1,1));

// CONVERTIR FUNCION SUMAR A FUNCION DE FLECHA

const sumarFlecha = (a,b) => {
    return a + b;
};

console.log( sumarFlecha (1,2));

// reducir funcion de flecha solo funciona si solo hay una linea con el return si hay mas lineas no se puede utilizar
const sumarFlecha2 = (a,b) => {
    return a + b;           //solo si hay una linea y esa linea es el return
};

console.log( sumarFlecha2 (1,3));

const sumarFlechaReducida = (a,b) => a + b; // puedo quitar las llaves y el return

console.log( sumarFlechaReducida (1,4));

// OBTENER NUMERO ALEATORIO

function geTAleatorio() {
    return Math.random();  
};

console.log( geTAleatorio () );

//reduccion a funcion de flecha sin llaves

const geTAleatorioFlecha = () => Math.random();

console.log( geTAleatorioFlecha () );
