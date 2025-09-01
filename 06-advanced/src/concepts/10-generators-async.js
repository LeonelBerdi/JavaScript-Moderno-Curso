import { heroes } from '../data/heroes.js';

/**
 * 
 * @param {HTMLDivElement} element Aqui voy a recibir el elemento Html es el espacio en el que voy a querer renderizar lo que sea
 */
export const generatorsAsyncComponent = async( element ) => {

    const heroGenerator = getHeroGenerator();
    let isFinished = false;

    do {
        const { value, done } = await heroGenerator.next();
        isFinished = done;
        if ( isFinished ) break;
        console.log({value, done})

        element.innerHTML = value;
        
    } while( !isFinished )


    
}

async function* getHeroGenerator() {
    
    for ( const hero of heroes ) {
        await sleep();
        yield hero.name;
    }

    return 'no hay mas';
}

const sleep = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve();
        },500);
    })

}