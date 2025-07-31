

const regresaTrue = () => {
    console.log('Regresa true')
    return true
};

const regresaFalse = () => {
    console.log('Regresa false')
    return false
};

// NEGACION "!" 
console.warn('Not o la negacion');
console.log( true);     //true
console.log( !false);   //true
console.log( false);    //false
console.log( !true);    //false

console.log( !regresaFalse());   

console.warn('And'); // true si todos los valores son verdaderos.

console.log( true && true);     //true
console.log( false && true);    //false
console.log( true && false);    //false
console.log( false && false);   //false
console.log( true && !false);   //true

// operador & ylas funciones 
console.log( '-----------------' ) // pongo un separador
console.log( regresaFalse() && regresaTrue() ); // al ser la primera condicion false ya no se ejecuta la segunda funcion 
console.log( !regresaFalse() && regresaTrue() );

console.log( '-----------------' ) // pongo un separador
!regresaFalse() && regresaTrue();
regresaFalse() && regresaTrue();

console.log( '4 condiciones AND', true && true && true && false); //false


console.warn('OR'); //true
console.log( true || true);     //true
console.log( true || false);    //true
console.log( false || true);    //true
console.log( false || false);   //false

console.log( '--------||---------' ) // pongo un separador
console.log( regresaTrue() || regresaFalse() ); //al ser la primera condicion true ya no se ejecuta la segunda.
console.log( '--------||---------' ) // pongo un separador
console.log( regresaFalse() || regresaTrue() );//al ser la primera condicion flase se ejecuta la segunda.


console.log( '4 condiciones OR', true || true || true || false); //true