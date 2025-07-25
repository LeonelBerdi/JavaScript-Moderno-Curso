const personaje = {
    nombre: 'Tony Stark', 
    codeName: 'Ironman',                        //string
    vivo: false,                                //booliano
    edad: 40,                                   //number
    coords:{                                    //objeto
        lat: 34.034,
        lng: -118.70,
    },
    trajes:['Mark I', 'Mark V', 'Hulkbuster'], //array
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California',
    },
    /*ultima-pelicula: 'Infinity War', Esto le dice a JS que a la variable ultima le quiero restar el valord e la variable pelicula */
    'ultima-pelicula': 'Infinity War', // si se quiere usar en un nombre de variable espacios o caracteres reservados se debe poner entre comillas
    'ultima pelicula': 'Infinity War', 
};

personaje.nombre //obtengo el valor de la llave "nombre"del objeto literal "personaje"

console.log( personaje );
// formas de obtener los valoras de las llaves incluidas en el objeto literal
console.log('Nombre: ', personaje.nombre ); //usando el METODO O MARCACION DE PUNTO"."
console.log('Nombre: ', personaje['nombre'] ); // notacion de corchete []
console.log('Coords', personaje.coords );
console.log('lat', personaje.coords.lat ); //para obtener el valor de un objeto literal dentro de otro concateno un metodo con otro en este caso "coords.lat"

//tareas
console.log('No. Trajes', personaje.trajes.length ); //puedo concatenar un metodo (trajes) y un metodo basico (length).

console.log('Enemigo hulk armadura', personaje.trajes[2] );
console.log('último traje', personaje.trajes[personaje.trajes.length -1]); // solucion pero no es elegante
console.log('último traje', personaje.trajes.at(-1) ); //existe un metodo basico que es at es igual a  "array[array.length - 1]"

// otra forma de busqueda
const x = 'vivo';
console.log( 'vivo', personaje['vivo']);
console.log( 'vivo', personaje[x]);
console.log( x , personaje[x]);

// variable con caracteres especiales recuperar debo usar los [] no funciona la notaciom de punto en este caso.

console.log( 'ultima pelicula', personaje['ultima pelicula']);
console.log( 'ultima pelicula', personaje['ultima-pelicula']);
console.log( 'ultima pelicula', personaje["ultima pelicula"]);
console.log( 'ultima pelicula', personaje["ultima-pelicula"]);

// Más Detalles

delete personaje.edad; //Si uso la palabra reservada "delete" elimino la propiedad "edad"
console.log( personaje );

// crear una nueva propiedad en el objeto

personaje.casado = 'true'; 


// convertir un objeto en un arreglo

const entriesPares = Object.entries( personaje );
console.log( entriesPares );

/* bloqueo por constante
personaje = true;
*/

//bloqueo de propiedades utilizo una instruccion 

Object.freeze( personaje );


personaje.dinero = 100000000;
personaje.casado = false;
personaje.direccion.ubicacion = 'Costa Rica';
console.log( personaje );

//bloqueo de propiedades de un objeto dentro de otro utilizo una instruccion y el objeto
Object.freeze( personaje.direccion );

// como obtener todas las propiedades de dentro de un objeto:

const propiedades = Object.getOwnPropertyNames( personaje );
console.log({ propiedades });

//como obtener los valoras de las propiedades de un opbjeto 
const valores = Object.values ( personaje );
console.log({ valores });