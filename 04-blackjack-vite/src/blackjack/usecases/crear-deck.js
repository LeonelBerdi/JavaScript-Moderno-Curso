import _ from "underscore";


/**
 * Esta funcion crea un nuevo deck
 * @param { Array<String> } tiposDeCarta Ejemplo: ['C','D','H','S']
 * @param { Array<String> } tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns { Array<String> } retorna un nuevo deck de cartas 
 */

// Esta función crea un nuevo deck
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    /*
    // añado validación de que tipo de carta no es “null o undefined” si tipo de carta esta vació la negación (invierto el valor es un booleano “true” y entonces se envía el mensaje en pantalla. 
    if ( !tiposDeCarta ) throw new Error('tiposDeCarta es Obligatorio');
    // valido ademas que el valor se un array con al menos un valor
    if ( !tiposDeCarta.length > 0 ) throw new Error('tiposDeCarta tiene que ser un 	arreglo de string');
    */
    //valido que tipo de carta no es “null o undefined” y el arreglo no este vacio
    if ( !tiposDeCarta || tiposDeCarta.length === 0 ) throw new Error('tiposDeCarta es Obligatorio como un arreglo de string');

    //valido que tipos Especiales no es “null o undefined” y el arreglo no este vacio
    if ( !tiposEspeciales || tiposEspeciales.length === 0 ) throw new Error('tiposEspeciales es Obligatorio como un arreglo de string');

    let deck = [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );

    return deck;
};

//export default crearDeck; //esta es la exportacion por defecto del archivo. si al importar de este archivo no se indica nada se importa esto.