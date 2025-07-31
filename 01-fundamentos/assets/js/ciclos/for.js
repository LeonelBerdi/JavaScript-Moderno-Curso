const heroes = ['Batman', 'Superman', 'Mujer Maravilla','Aquaman'];

console.warn('For tradicional');
// se declara la variabla, la condicon y el incremento en el propio ciclo 

for ( let i=0 ; i < heroes.length ; i++ )  {    // la varible i solo existe dentro del for
    console.log( heroes [i]);                   //Se repite mientras se cumpla la condicion  
};

console.warn('For in');         //CUIDADO NO SE GARANTIZA EL OREN EN ARRAY

for( let i in heroes ) {
    console.log( heroes [i]);
};

console.warn('For oF');

for( let i of heroes ) {
    console.log( i );
};

console.warn('For oF singular');
// al usar el for of se utiliza el singular de heroes para la varaible

for( let heroe of heroes ) {
    console.log( heroe );
};

