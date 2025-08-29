
/**
 * 
 * @param {HTMLDivElement} element Aqui voy a recibir el elemento Html es el espacio en el que voy a querer renderizar lo que sea
 */
export const promiseRaceComponent = ( element ) => {

    element.innerHTML = 'Loading...';   //Le doy un valor inicial a la propiedad "innerHTML"

    const renderValue = ( value ) => {
        element.innerHTML = value;
    }

    Promise.race([
        slowPromise(),
        mediumPromise(),
        mediumPromise(),
        fastPromise(),
        mediumPromise(),
        slowPromise(),
        fastestPromise(),
//  ]).then( value => renderValue(value));  argumento cuya unica razon de ser es enviarlo a mi funcion le lenvio la funcion como argumento 
    ]).then( renderValue );
    
}

const slowPromise = () => new Promise( resolve  => {
    setTimeout(() => {
        resolve('Slow Promise');
    }, 2000);    
});

const mediumPromise = () => new Promise( resolve  => {
    setTimeout(() => {
        resolve('Medium Promise');
    }, 1500);    
});

const fastPromise = () => new Promise( resolve  => {
    setTimeout(() => {
        resolve('Fast Promise');
    }, 1000);    
});

const fastestPromise = () =>        //creo una funcion "fastestPromise"
        new Promise( resolve  => {  //creo una promesa anonima con una unica instancia "resolve" 
    setTimeout(() => {              //como no es obligatorio definir el reject no lo hago y le doy solo el resolve al los 2 segundos      
        resolve('Fastest Promise');
    }, 500);    
});
