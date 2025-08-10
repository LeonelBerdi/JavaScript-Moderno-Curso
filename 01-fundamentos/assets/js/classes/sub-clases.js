

class Persona {
    static _conteo = 0; //Propiedad de tipo estatica
    static get getConteo() {
        return Persona._conteo + ' instancias'; //Hago referencia a la propiedad de la clase 
    };

    static mensaje() {                      //Es un metodo de la clase lo llamo desde Persona y lleva ().
        console.log( this.nombre );         //Al hacer referencia a una propiedad instanciada me devolvera undefined
        console.log('Hola a todos, soy un método estático');    
    };

    nombre = '';
    codigo = '';
    frase = '';
    comida ='';     

    constructor( nombre = 'Sin Nombre', codigo = 'Sin Código', frase = 'Sin Frase' ) {  
        
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;    

        Persona._conteo++;      //Incremento en uno el contador cada vez que se ejecuta el constructor asii se cuantas instacias de este tipo se han creado
    };

    set setComidaFavorita( comida ) {
        this.comida = comida.toUpperCase(); 
    };

    get getComidaFavorita() {
        return `La comida Favoria de ${ this.nombre} es ${ this.comida }`;
    };

    quienSoy() {
        console.log(`Soy ${ this.nombre } y mi identidad es ${ this.codigo } `);
    };

    miFrase() {
        this.quienSoy();
        console.log(`${ this.codigo } dice: ${ this.frase }`);
    };

};

class Heroe extends Persona{       

    clan = 'sin clan';             //Esta Propiedad Difiere de las de la clase Persona

    constructor (nombre, codigo, frase, clan) { //Incializo la propiedad clan que es propia de la clase Heroe
        super(nombre, codigo, frase);   //Envio el valor para las propiedades al constructor de la Clase Persona
        this.clan = clan;
    };

    quienSoy() {                //creo una funcion con el mismo nombre que en el padre 
        super.quienSoy();       //llamo a la funcion del padre dentro de una funcion del hijo  
        console.log(`Soy ${ this.nombre } y mi clan es ${ this.clan } `);
    };

    quienSoyPersona() {     //Creo una Funcion que llama a una funcion que se ha reescrito en la nueva clase
        super.quienSoy();     //utilizo la palabra reservada super para llamar a una funcion de la clase padre
    };


};


//const spiderman = new Persona( 'Peter Parker', 'Spiderman', 'Tu amigo y vecino');

// const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Tu amigo y vecino');

const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Tu amigo y vecino', 'Avengers' );

console.log( spiderman );

spiderman.quienSoy();
// spiderman.quienSoyPersona();


