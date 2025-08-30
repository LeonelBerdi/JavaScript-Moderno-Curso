import { heroes } from "../data/heroes" //Importacion del arreglo de heroes


/**
 * 
 * @param {HTMLDivElement} element Aqui voy a recibir el elemento Html es el espacio en el que voy a querer renderizar lo que sea
 */
export const asyncComponent = ( element ) => {

    const id1 = '5d86371fd55e2e2a30fe1ccb2';

    /* OPTIMIZACION DE CODIGO
    const renderHero = ( hero ) => {
        element.innerHTML = hero.name;
    }

    findHero(id1)
        .then(hero => renderHero(hero));
    */

    findHero(id1)
        .then( name => element.innerHTML = name )
        .catch( error => element.innerHTML = error );

    // console.log(findHero( id1 ));
    // console.log(findHeroPromise( id1 ));
    
}

/**
 * 
 * @param {String} id
 * @returns {Promise<String>} mi funcion devulve una promesa cuyo valor es un String 
 */
const findHero = async( id ) => {
    

    const hero = heroes.find( hero => hero.id === id );
    if (!hero ) 
        throw `Hero with id ${ id } not found`;
        

    return hero?.name;
    
}



// Esto ocurre al añadir el "async" convierte mi funcion en todo esto
const findHeroPromise = ( id ) => new Promise( resolve => {
    const hero = heroes.find( hero => hero.id === id );
    resolve(hero);
} );