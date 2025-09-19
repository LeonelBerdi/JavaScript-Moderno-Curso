const heroes = ['Batman', 'Superman','Flash','Aquaman'];
const heroesCopy = heroes;

//heroes.sort();  //se modifica el original y la referencia ambos se ordenan

const sortedHeroes = heroes.toSorted(); //los ordena y me devulve un nuevo arregle me rompe la referencia;

heroes.reverse(); //revierte el orden del array pero mantiene referencia

const reversedHeroes = heroes.toReversed();

const deletedHero = heroes.splice(0,1,'Green Lantern');

const newHeroes = heroes.toSpliced(0,1,'Green Lantern');

console.table(heroes);
console.table(heroesCopy);
console.table(sortedHeroes);
console.table(reversedHeroes);
console.table(deletedHero);
console.table(heroes);
console.table(newHeroes);