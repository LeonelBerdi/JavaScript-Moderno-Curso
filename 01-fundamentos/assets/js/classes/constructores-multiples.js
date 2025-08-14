//COMO CREAR MULTIPLES CONSTRUCTORES

class Persona {
    //En Js no se puede tener mas de un constructor en una clase entonces toca crear una funcion que nos haga de constructor

    static constructorObjetos1( objeto ) {
        let nombre = objeto.nombre,
            apellido = objeto.apellido,
            pais = objeto.pais;
        return new Persona(nombre, apellido, pais);
    };

    //Usando destructuracion de objetos tomo las propiedades del objeto recibidso que quiero para parametros

    static constructorObjetos2( {nombre, apellido, pais}) {
        return new Persona(nombre, apellido, pais)
    };

    
    constructor( nombre, apellido, pais ) { //Este es el constructor normal de la clase que debe recibir los argumentos por parametro
        this.nombre     = nombre;
        this.apellido   = apellido;
        this.pais       = pais;

    };

    
    getInfo() {
        console.log(`info: ${ this.nombre}, ${ this.apellido}, ${this.pais}`);
    };

};

const   nombre1     = 'Melissa',
        apellido1   = 'Flores',
        pais1       = 'Honduras';


const fher = {
    nombre: 'Fernando',
    apellido: 'Herrera',
    pais: 'Costa Rica',
};

const lberdi = {
    nombre: 'Leonel',
    apellido: 'Berdichevsky',
    pais: 'España',
};



const persona1 = new Persona( nombre1, apellido1, pais1); //uso el contructor de la clase

//Llamo el segundo constructor que es un metodo de la clase
const persona2 = Persona.constructorObjetos1( fher );

//Llamo el tercer constructor que es un metodo de la clase desestructurado
const persona3 = Persona.constructorObjetos2( lberdi );


persona1.getInfo();
persona2.getInfo();
persona3.getInfo();