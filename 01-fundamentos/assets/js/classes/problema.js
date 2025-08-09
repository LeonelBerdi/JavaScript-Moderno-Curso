

const fher = {
    nombre: 'Fernando',
    edad: 30,
    imprimir() {
        console.log( `Nombre: ${ this.nombre } - Edad: ${ this.edad }` );
    }
}

const pedro = {
    nombre: 'Pedro',
    edad: 15,
    imprimir() {
        console.log( `Nombre: ${ this.nombre } - Edad: ${ this.edad }` );
    }
}

/*
fher.imprimir();
pedro.imprimir();
*/
// ESTE ERA EL STANDARD PARA UNA CLASE ANTIGUAMENTE 
// EL PROBLEMA ES QUE SE DEBE UTILIZAR LA PLABRA "NEW"
// ESTA FORMA DE TRABAJAR NO ES RECOMENDABLE EN LA ACTUALIDAD.
function Persona (nombre, edad= 10) {           //Funcion se crea con UpperCamelCase para indicar que me servira para crear instancias 
    console.log('Se ejecuto esta linea');       // no deja de ser una funcion comun y corriente 
                                                // cuando defino los parametros que va a recibir le puedo asignar valores por defecto en caso de que no se le informen     
    this.nombre = nombre;                       //para realizar la asignacion a las propiedades de los argumentos que recibe la funcion utilizo "this". ( creo una propiedad nombre para el objeto persona this.nombre= persona.nombre y le asigno el argumento recibidio "nombre").
                                                //asignar los valores que recibe la funcion a las proiedades que debe tener el objeto que se va a crear utilizo el "this".
    this.edad = edad;
    //para implementar un metodo para este objeto:
    this.imprimir = function() {
        console.log( `Nombre: ${ this.nombre } - Edad: ${ this.edad }` );
        };                                             

};                                             
// ESTE TIPO DE CODIFICACION SE COMPLICA SI NECESITO EXTENDERLO, AÑADIR PROPIEDADES O AÑADIR FUNCIONALIDAD QUE NO QUIERO QUE CAMBIE
// PROPIEDADES DE TIPO ESTATICAS O TAMPOCO SOPORTA PROPIEDADES DE TIPO PRIVADAS.
// ES DECIR TODO LO QUE CONTIENE EL OBJETO CREADO LO PUEDO MODIFICAR Y ALTERAR.
// ESTO ES ALGO QUE SE RESUELVE CREANDO PROPIEDADES DE TIPO PRIVADAS.



const maria = new Persona('Maria', 18);         //Palabra resrvada new me permite crear una nueva instancia de tipo persona 
console.log(maria);                             // maria es un objeto que tiene el tipo persona.
maria.imprimir();

const melissa = new Persona('Melissa', 35);
console.log(melissa);   
melissa.imprimir();