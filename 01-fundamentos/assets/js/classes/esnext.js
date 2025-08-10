

class Rectangulo {

    #area = 0;

    constructor(base = 0 ,altura = 0) {
        this.base   = base;
        this.altura = altura;

        this.#area  = base * altura;    //El area es un valor calculado y no deberiamos de poder modificarlo directamente, deberia d ser una propiedad privada.
    };

    calcularArea () {
        console.log( this.#area * 2)
    };

};

const rectangulo = new Rectangulo(10, 15);


console.log(rectangulo);

// rectangulo.#area = 100;

console.log(rectangulo);

rectangulo.calcularArea();