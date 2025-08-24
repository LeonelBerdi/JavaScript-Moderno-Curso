import { heroes } from '../data/heroes';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = ( element ) => {

    /* compruebo que estoy en la funcion
    console.log('callbacksComponent');*/
    const id = '5d86371fd55e2e2a30fe1ccb1';
    findHero( id, ( error, hero )=>{
        //element.innerHTML = hero?.name || 'No hay heroe'; primera opcion de solucion de validacion 
        
        if ( error ) {
            element.innerHTML = error;
            return;
        }
        
        element.innerHTML = hero.name;
    } );



};    
    
    
    
/**
* 
* @param {string} id 
* @param { (error: String|Null, hero: Object)=> void } callback //Defino callback como una funcion que recibe un objeto "hero" y no retorna nada "void"
                                            //puedo poner que es una funcion pero esto no explica como va a funcionar
*/          
const findHero = ( id, callback ) => {

        const hero = heroes.find( hero => hero.id === id); 

        if( !hero ) {
            callback (`Hero with id ${ id } not found.`);
            return;
        }
        
        callback ( null, hero );

};

    


