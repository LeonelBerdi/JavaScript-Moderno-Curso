
/**
 * 
 * @param {HTMLDivElement} element Aqui voy a recibir el elemento Html es el espacio en el que voy a querer renderizar lo que sea
 */
export const generatorFunctionsComponent = ( element ) => {

    //const myGenerator = myFirstGeneratorFunction();
    //console.log( myGenerator.next());
    const genId = idGenerator();

    const button = document.createElement('button');
    button.innerText = 'Click me';
    element.append( button );

    const renderButton = () => {
        const { value } = genId.next();
        button.innerText = `Click ${ value }`;
    } 
    /*Sepuede optimizar estoy en un caso donde mi funcion que voy a llamar no tiene ningun argumento perfectamente puedo no toear el arguemnto event y darle como parametro la funcion. 
    button.addEventListener('click', (event) => renderButton() );
    button.addEventListener('click', () => renderButton() ); como no tewngo argumentos envio como referencia la funcion
    button.addEventListener('click', renderButton);
    */
    button.addEventListener('click', renderButton);
}

function* idGenerator() {   //Generar id infinitos
    let currentId = 0;
    while(true) {
        yield ++currentId;  //Asi el primer valor es 1 si lo pongo como "currentId++" el primer valor sera 0.
    }

} 



function* myFirstGeneratorFunction() {
    yield 'Primer valor';
    yield 'Segundo valor';
    yield 'Tercer valor';
    yield 'Cuarto valor';

    return 'Ya no hay valores';
    yield 'Ya no pueden hacer nada';

} 
