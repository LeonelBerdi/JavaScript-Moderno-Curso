const state = [
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

console.table(state);

const index = 1;
const newName = 'Green Lantern';

const newState = state.map( (hero, i) => {  //reemplazar en una array una posicion 
    if ( i === index ) {
        hero.name = newName;
    }

    return {...hero};   //solucion para romper la referencia hacer el spread del objeto
                        //no rompe la referencia cuidadito!

});

const index2 = 3;
const newName2 = 'Cyborg';

const newState2 = state.with(index2, { //sirve para en un array indicar la posicion que se quiere reemplazar sin necesidad de lo anterior pero no rompe la referencia
    id: 1000,
    name: newName2
}) 

const index3 = 2;
const newName3 = 'WonderWoman';

const newState3 = structuredClone(state).with(index3, { //para romper la referencia lo paso por el structuredClone
    id: 1000,       //sino le doy uno de los datos del objeto lo sobreescribe en vacio 
    name: newName3
}) 

const newState4 = structuredClone(state).with(index3, { //para romper la referencia lo paso por el structuredClone
    ...state[index3],       //esto no lo entiendo, hace un spread del objeto de la posicion del arreglo pero no entiendo como se evita que pise la info que no le ody que es el id???
    name: newName3
}) 

//uso de .at

const newState5 = structuredClone(state).with(index3, { //para romper la referencia lo paso por el structuredClone
    ...state.at[index3],       //esto no lo entiendo, hace un spread del objeto de la posicion del arreglo pero no entiendo como se evita que pise la info que no le ody que es el id???
    name: newName3
}) 


state[0].name = 'Volcan Negro';

console.table(state);
console.table(newState);
console.table(newState2);
console.table(newState3);

console.log('La ultima posicion: ', state[state.length -1])
console.log('La ultima posicion: ', state.at(-1))
console.log('La ultima posicion: ', state.at(-2))