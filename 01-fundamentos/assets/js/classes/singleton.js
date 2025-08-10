


class Singleton {      //El nombre singleton es opcional  

    static instancia;   //Esta es la propiedad de miclase que si ya esta inicializada si se intenta incicalizar otra instancia va a retornar este valor.
                        //Lo ideal es declarar la ppropiedad como privada con # pero hay un tema de compatibilidad
                        //Por defecto cuando se inicia la propiedad instancia esta en "undefined"
                        //Lo compruebo haciendo un console.log(Singleton.instancia);
    nombre = '';        //Esta es la propiedad que quiero que se mantenga global basicamente a la que quiero asignar el mismo valor en todas las instancias que se creen.

    constructor (nombre = '') {
                                        //Basicamente si yo no tengo ninguna instancia creada le asignare el varlor recibido a la propiedad 
                                        //pero si ya tengo una instancia, no importe el argumento que se envie siempre le voy a asignar el valor que ya tenia en la propiedad.
        if ( !!Singleton.instancia ) {  //Comprueba si el valor de instancia es verdadero o falso para saber si ya se creo una instancia de la clase                                     
            return Singleton.instancia; //Como sera un truty si ya se inicializo (lo convierto a booliano con la doble negacion) al ser verdadero retorno el valor de Singleton.instancia que apunta al mismo objeto que el primero que se creo
        };                              //Al ejecutar un return ya no sigo ejecutando el resto del codigo del constructor me salgo del constructor. 
        /*explicacion de la doble negacion
        const a = undefined;
        console.log(a);                 //undefined
        console.log(!a);                //true
        console.log(!!a);               //false
        */
                
        Singleton.instancia = this; //Si el valor de Singleton.instancia (propiedad "instancia" de la clase "Singleton") esta vacio entonces va a ser igual al valor recibido al crear la primera instancia. Apunta a la primera instancia creada.
                                    //Instancia apunta al mismo objeto que la primera instancia
                                    //Estamos guardando una referencia al objeto que se esta creando en este momento (this) que es "la primera instancia"
        this.nombre = nombre;
            
        return this;                //por defecto el constructor retorna un objeto de la misma clase 
    };                   


}                       

const instancia1 = new Singleton('Ironman'); //Creo un objeto "instancia1", de la clase Singleton y le envio el argumento "Ironman"
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('BlackPanther');

console.log(`Nombre en la instancia1 es: ${ instancia1.nombre } `);
console.log(`Nombre en la instancia2 es: ${ instancia2.nombre } `);
console.log(`Nombre en la instancia3 es: ${ instancia3.nombre } `);