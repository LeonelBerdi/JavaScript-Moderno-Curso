

class Persona {
    
    nombre = '';    //valor por defecto un string vacio
    codigo = '';
    frase = '';
    
    constructor( nombre = 'Sin Nombre', codigo = 'Sin Código', frase = 'Sin Frase' ) {  //valor por defecto
        
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    };
};

const spiderman = new Persona( 'Peter Parker', 'Spiderman', 'Tu amigo y vecino');
console.log(spiderman);
const ironman = new Persona( 'Tony Stark', 'Ironman', 'Yo soy Ironman');
console.log(ironman);


