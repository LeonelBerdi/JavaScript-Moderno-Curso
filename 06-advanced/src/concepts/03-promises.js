import { heroes } from '../data/heroes.js';

/**
 * 
 * @param {HTMLDivElement} element Aqui voy a recibir el elemento Html es el espacio en el que voy a querer renderizar lo que sea
 */
export const promiseComponent = ( element ) => {
    //Esta funcion es para presentar la promesa cuando es correcta
    const renderHero = ( hero ) => {
        element.innerHTML = hero.name;
    }
    
    //Creo una funcion para mostrar 2 heroes
    const renderTwoHeros= ( hero1, hero2 ) => {
        element.innerHTML = `
        <h3>${hero1.name}</h3>
        <h3>${hero2.name}</h3> 
        `;
    }

    //Esta funcion es para manejar el error
    const renderError = ( error ) => {
        element.innerHTML = `
        <h1>Error:</h1>
        ${error}
        `;
    } 
    const id1 ='5d86371f25a058e5b1c8a65e';
    const id2 ='5d86371f233c9f2425f16916';
    /* Modifico el codigo para 2 heroes!!
    findHero( id1 )
        .then( renderHero )
        .catch( renderError );
    */
        /* PROMESAS COMO CONSUMIRLAS OBTENER SU VALOR
        .then = me da el valor de la promesa si se ha resuleto "resolve"
        .catch = me da el valor de la promesa si hay un error "reject"
        .finally = es una funcion que se va a ejecutar siempre despues del then o el catch y se utiliza para realizar algun tipo de limpieza en el codigo.
        NOTAS Y OPTIMIZACION DE CODIGO
        Esta funcion es para llamar al valor de la promesa si es resolve. 
        .then ( superHero => renderHero( superHero )); 
        Optimizo esta Linea:
        .then( renderHero ); Como mi funcion solo recibe un unico argumento entonces llamo a la funcion y le doy como argumento el valor de mi promesa como argumento.
        Esta es la fomra de llamar el valor de la promesa si el resultado es reject
        .catch( error => renderError ( error ) ); 
        Optimizo:
        .catch( renderError );
        */
    /*OPTIMIZACION DE CODIGO QUITO LAS VARIABLES Y LAS PASO DIRECTO AL RENDER 
    let hero1, hero2; //defino ambos heroes como undefined

    findHero( id1 )
        .then( ( hero1n ) => {
            hero1 = hero1n;   //el hero1 es igual al hero que recibo de mi promesa

            findHero( id2 ) //busco el hero2
                .then( hero2n => {
                    hero2 = hero2n;
                    renderTwoHeros(hero1,hero2);
                } )
                .catch( renderError );
        } )
        .catch( renderError );
    */
    /* Como evitar el anidamiento
    findHero( id1 )
        .then( ( hero1 ) => {
            
            findHero( id2 ) //busco el hero2
                .then( hero2 => {
                    renderTwoHeros(hero1,hero2);
                } )
                .catch( renderError );
        } )
        .catch( renderError );
    */
    /* SOLUCION CON RETURN PARA ANIDAMIENTO
    let hero1;

    findHero(id1)
        .then( hero => {
            hero1 = hero;
            return findHero(id2);
        }).then( hero2 => {
            renderTwoHeros( hero1, hero2);
        })
        .catch( renderError );
    */
    Promise.all([
        findHero(id1),
        findHero(id2),
    ])
    .then( ([hero1, hero2]) => renderTwoHeros( hero1, hero2 ))
    .catch( renderError );
    
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