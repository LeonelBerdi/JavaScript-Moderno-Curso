

class Persona {
   
    nombre = '';
    codigo = '';
    frase = '';
    comida ='';     

    constructor( nombre = 'Sin Nombre', codigo = 'Sin Código', frase = 'Sin Frase' ) {  
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;    

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
console.log(spiderman);
console.log( spiderman.getComidaFavorita );


