

class Persona {
    /* ESTAS PROPIEDADES SE RECIBEN VIA PARAMETROS EN EL CONSTRUCTOR NO ES NECESARIO DECLARARLAS
    nombre = '';
    codigo = '';
    frase = '';
    */
    comida ='';     //Como la propiedad no recibe valor del constructor la de declarar
    constructor( nombre = 'Sin Nombre', codigo = 'Sin Código', frase = 'Sin Frase' ) {  //valor por defecto
      
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;    

    };

    quienSoy() {
        console.log(`Soy ${ this.nombre } y mi identidad es ${ this.codigo } `);
    }

    miFrase() {
        this.quienSoy();
        console.log(`${ this.codigo } dice: ${ this.frase }`);
    }

};

const spiderman = new Persona( 'Peter Parker', 'Spiderman', 'Tu amigo y vecino');
console.log(spiderman);
const ironman = new Persona( 'Tony Stark', 'Ironman', 'Yo soy Ironman');
console.log(ironman);
/*
spiderman.quienSoy();
ironman.quienSoy();
*/
spiderman.miFrase();
ironman.miFrase();

