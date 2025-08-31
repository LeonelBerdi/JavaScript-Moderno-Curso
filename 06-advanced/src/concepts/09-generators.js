
/**
 * 
 * @param {HTMLDivElement} element Aqui voy a recibir el elemento Html es el espacio en el que voy a querer renderizar lo que sea
 */
export const generatorFunctionsComponent = ( element ) => {

   const myGenerator = myFirstGeneratorFunction();

    console.log( myGenerator.next());
    console.log( myGenerator.next());
    console.log( myGenerator.next());
    console.log( myGenerator.next());
    console.log( myGenerator.next());
    console.log( myGenerator.next());
}




function* myFirstGeneratorFunction() {
    yield 'Primer valor';
    yield 'Segundo valor';
    yield 'Tercer valor';
    yield 'Cuarto valor';

    return 'Ya no hay valores';
    yield 'Ya no pueden hacer nada';

} 
