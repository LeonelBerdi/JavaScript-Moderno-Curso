

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

const spiderman = new Persona( 'Peter Parker', 'Spiderman', 'Tu amigo y vecino');
const ironman = new Persona( 'Tony Stark', 'Ironman', 'Yo soy Ironman');



//console.log(spiderman);
/*
const ironman = new Persona( 'Tony Stark', 'Ironman', 'Yo soy Ironman');
console.log(ironman);

spiderman.quienSoy();
ironman.quienSoy();
*/
spiderman.miFrase();
//ironman.miFrase();
spiderman.setComidaFavorita = 'el pie de cereza de la tia may';

//spiderman.comida = 'Duende Verde';
// console.log(spiderman);
// console.log( spiderman.getComidaFavorita );

//Persona._conteo = 2;    //se han inicializado 2 instacis de tipo Persona

// console.log('Conteo estatico', Persona._conteo );

console.log( Persona.getConteo );

Persona.mensaje();

Persona.propiedadExterna = 'Hola Mundo';

console.log( Persona );
console.log( Persona.propiedadExterna );