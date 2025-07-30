// RETORNO DE OBJETOS EN FUNCIONES CONVERSION A FUNCION DE FLECHA Y REDUCCION

function crearPersona( nombre, apellido ) {
    return {
        nombre: nombre,
        apellido: apellido,
    };
};

const persona = crearPersona( 'Fernando', 'Herrera' );
console.log( 'Primera Funcion', persona );

// Reduccion de la funcion crearPersona
// Si el nombre de la llave del objeto que voy a crear es igual al del argumento no es necesario que lo ponga

function crearPersona2 ( nombre, apellido ) {
    return {
        nombre,         //Quito la "llave" ( "nombre:") del metodo definido o propiedad definido para el objeto y se usa como llave la definida en el argumento de la funcion.
        apellido,       //Js entiende que se quiere crear una propiedad con el mismo valor que el declarado en los parametros de la funcion.
    };
};

const persona2 = crearPersona2( 'Fernando', 'Herrera' );
console.log( 'Segunda Funcion', persona2 );

//Reduccion de lineas 

function crearPersona3 ( nombre, apellido ) {
    return { nombre, apellido};
};

const persona3 = crearPersona3( 'Fernando', 'Herrera' );
console.log( 'Tercera Funcion', persona3 );

//CONVERTIR EN FUNCION DE FLECHA

const crearPersona4 = ( nombre, apellido ) => {
    return { nombre, apellido }
};

console.log( 'Cuarta Funcion', crearPersona4( 'Fernando', 'Herrera' ) );

// Informar en Funcion de flecha que el retorno es un objeto poner () antes de las llaves
const crearPersona5 = ( nombre, apellido ) => ({ nombre, apellido }); // quito el return pero al devolver un objeto devo indicar entre parentesis.

console.log( 'Quinto Funcion', crearPersona5( 'Fernando', 'Herrera' ) );

// Objeto Arguments y funciones de flecha
function imprimeArgumentos() {
    console.log( arguments );
};

imprimeArgumentos(10, true, false, 'Fernando', 'hola');

//convierto en funcion de flecha
/* COMENTADO PORQUE ESTO DA UN ERROR LAS FUNCIONES FLECHA NO TIENEN EL OBJETO ARGUMENTS
const imprimeArgumentos2 = () => {
    console.log( arguments );       // las funciones de flecha no crean el objeto arguments!!
};

imprimeArgumentos2(10, true, false, 'Fernando', 'hola');
*/
//solucion utilizar el parametro rest que se llama poniendo ... y se crea un array con todos los parametros enviados a la funcion
const imprimeArgumentos3 = ( ...args ) => {
    console.log( args );       // args es un array con todos los parametros enviados a la funcion
};

imprimeArgumentos3(10, true, false, 'Fernando', 'hola');

//añadir parametros antes del rest
const imprimeArgumentos4 = ( edad, nombre, ...args ) => {
    console.log( {edad, nombre, args });  // edad y nombre seran parametros independientes y luego el resto iran al arreglo args.	
};

imprimeArgumentos4(10, 'Fernando', true, false, 'hola');

// MODIFICACION DE LA FUNCION ANTERIOR EN CASO DE NECESITAR utilizar CADA UNO DE LOS ARGUMENTOS QUE DEVUELVE LA FUNCION EN EL ARRAY
const imprimeArgumentos5 = ( edad, ...args ) => {
//      console.log( {edad, args });  // edad y nombre seran parametros independientes y luego el resto iran al arreglo args.	
        return args;
};

const argumentos = imprimeArgumentos5(10, true, false, 'Fernando', 'hola'); //EL ARRAY QUE ME DEVUELVE LA FUNCION TIENE 4 ELEMENTOS [true, false, 'Fernando', 'hola'] 
console.log ({ argumentos }); 
console.log (argumentos[0], argumentos[1], argumentos[2],argumentos[3] );// SI NECESITO CADA UNO DE LOS VALORES ME TOCA SACARLO UNO A UNO del array
//SI NECESITO CREAR UNA CONTSTANTE CON CADA VALOR AUN ES MAS TRRABAJO
const casado = argumentos[0];
const vivo   = argumentos[1];
const nombre = argumentos[2];
const saludo = argumentos[3];
console.log (casado, vivo, nombre, saludo);

//solucion al crear multiples constantes con cada posicion del arreglo que me retorna la funcion

const [casado2, vivo2, nombre2, saludo2] = imprimeArgumentos5(10, true, false, 'Fernando', 'hola');
console.log (casado2, vivo2, nombre2, saludo2);
console.log ( { casado2, vivo2, nombre2, saludo2 }); // Al añadir las llaves muestra el nombre de la variable y su valor, como pares de valores.

//Solucion aplicada en caso de que la funcion retorne un objeto

function crearPersona6( nombre, apellido ) {
    return {
        nombre: nombre,
        apellido: apellido,
    };
};

//Como mi funcion me retorna un objeto con dos porpiedades le indico cual de estas quiero guardar en mi variable.  
const { apellido } = crearPersona6( 'Fernando', 'Herrera' );
console.log({ apellido });

//Como cambiar el nombre de la variable que se crea si no quiero que mantenga el de la propiedad del objeto.
const { apellido: lastName } = crearPersona6( 'Fernando', 'Herrera' );
console.log({ lastName });


//PROTIP CON OBJETOS (DESESTRUCTURACION)
const tony = {
    nombre: 'Tony Stark', 
    codeName: 'Ironman',                     
    vivo: false,                                
    edad: 40,                                 
    trajes:['Mark I', 'Mark V', 'Hulkbuster'], 
};

// creo una funcion de felcha para imprimir las propiedadas

const imprimePropiedades = ( personaje ) => {

    console.log('nombre ',personaje.nombre);
    console.log('codeName ',personaje.codeName);
    console.log('vivo ',personaje.vivo);
    console.log('edad ', personaje.edad);
    console.log('trajes ',personaje.trajes);

}

imprimePropiedades( tony );

//DESESTRUCTURACION DE ARGUMENTOS

const imprimePropiedades2 = ({ nombre, codeName, vivo, edad, trajes }) => {

    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});

};

imprimePropiedades2( tony );

//QUE PASA SI LA EDAD NO VIENE DEFINIDA EN EL OBJETO NO TIENE ESA PROPIEDAD

const tony2 = {
    nombre: 'Tony Stark', 
    codeName: 'Ironman',                     
    vivo: false,                                
//  edad: 40,                                 
    trajes:['Mark I', 'Mark V', 'Hulkbuster'], 
};

const imprimePropiedades3 = ({ nombre, codeName, vivo, edad, trajes }) => {

    edad = edad || 0;  // si la edad tiene un valor la asigne a la variable y sino le ponga 0. "||" es el operador "o"

    console.log(nombre);
    console.log(codeName);
    console.log(vivo);
    console.log(edad);
    console.log(trajes);

};

imprimePropiedades2( tony2 ); //como no esta definida la edad me devuelve undefined
imprimePropiedades3( tony2 ); //modifico la funcion para realizar la validacion de que venga una propiedad con valor en edad o le asigne 0

// EL PROBLEMA AQUI ES QUE AÑADO MAS LINEAS DE CODIGO Y SI TENGO QUE VALIDAR MAS VALORES DE OTROS CAMPOS SIGUE CRECIENDO

//SOLUCION EN LAS FUNCIONES SE PUEDE ESTABLECER UN VALOR POR DEFECTO AL DEFINIR CADA UNA DE LAS VARIABLES EN LA FUNCION

const imprimePropiedades4 = ({ nombre= 'desconocido', codeName = 'desconocido', vivo = true, edad = 0, trajes = 'no tiene' }) => {

    console.log(nombre);
    console.log(codeName);
    console.log(vivo);
    console.log(edad);
    console.log(trajes);

};

imprimePropiedades4( tony2 );
