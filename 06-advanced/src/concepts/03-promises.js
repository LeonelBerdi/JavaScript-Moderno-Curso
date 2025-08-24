import { heroes } from '../data/heroes.js';

/**
 * 
 * @param {HTMLDivElement} element Aqui voy a recibir el elemento Html es el espacio en el que voy a querer renderizar lo que sea
 */
export const promiseComponent = ( element ) => {

    console.log('promiseComponent');

    
}

/**
 * 
 * @param {String} id 
 * @returns {Promise<Object>}   El retonor de nuestra promesa es un object, se puede especificar si es un string o una clase segun corresponda.
 */

const findHero = ( id ) => {

    return new Promise( ( resolve, reject ) => { //retorno el valor que tiene la promesa

        const hero = heroes.find( hero => hero.id === id );

        if ( hero ) {
            resolve( hero );    //despues del resolve no quiero seguir, aunque tecnicamente no puedo enviar otro resolve, puedo pero no haran nada pero la ejecucion de la funcion sigue.
            return;             //Debo enviar el return para que no siga la ejecucion de la funcion y se salga
        }

        reject(`Hero with id ${ id } not found `);    //Se puede dejar un reject vacio pero es mejor enviar algo
    });   

}