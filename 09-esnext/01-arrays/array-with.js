const superHeroes = [
//    'Fernando',
    {
        id: 1,
        name: 'Batman' 
    },
    {
        id: 2,
        name: 'Superman' 
    },
    {
        id: 3,
        name: 'Flash' 
    },
    {
        id: 4,
        name: 'Aquaman' 
    },
]

const superHeroesCopy = [...superHeroes];   //utilizando el operador spread "...", en teoria tengo una nueva copia del arreglo
                                            //cualquier copia sino se hace esto pasa por referencia salvo que sea un primitivo.

superHeroesCopy[1].name= 'Green Lantern'    //Al realizar el cambio en la copia aun se modifica el objeto del array original 
                                            // Esto se debe a que a pesar de que se ha utilizado el spread los objetos dentro del array se siguen pasando por referencia
                                            // El spread no funciona dentro de objetos si en primitivos 

superHeroesCopy[0] = 'Green Lantern'    // El spread no funciona dentro de objetos si en primitivos como fernando es un primitivo si lo realiza
                                        //el operador spread funciona si se sabe que se tiene primitivos, entros, numeros, simbolos.
const superHeroesCopy2 = [...superHeroes.map(h => ({...h}))];   //el problema es que si alguno de los objetos tiene dentro otro seguiria pasando por referencia 
                                                                // en el caso de que se tenga otro objeto dentro se deberia realizar otro map y es una locura.

const superHeroesCopy3 = structuredClone(superHeroes);      //Al utilizar el structuredClone la copia no se realiza por referencia


superHeroesCopy3[1].name= 'Superman'    //al modificar el array copiado con structure clone solo se ve modificado este no como en los casos anteriores. se rompe la referencia

const superHeroesCopy4 = JSON.parse( JSON.stringify(superHeroes)) // esto se hacia antes de esta forma

superHeroesCopy4[1].name= 'WonderWoman'

console.table(superHeroes);
console.table(superHeroesCopy);
console.table(superHeroesCopy2);
console.table(superHeroesCopy3);
console.table(superHeroesCopy4);




export default {
    
}