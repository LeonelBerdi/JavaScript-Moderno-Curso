

const dia = 5; // 0: Domingo

// podemos utilizar el swtich cuando tenemos valores exactos y podemos usar el === para igualarlo a algo

switch ( dia ) {                //compara el valor del parametro usando "===" con el valor asignado a cada caso. Se evalua el valor y el tipo de dato
    case 0:                     //A partir del primer caso donde se cumple la instruccion ejecuta todoas las lineas de todos los casos posteriores
        console.log('Domingo');
        break;                  //Si no quiero que ejecute el resto de lineas debo añadir al final del caso la palabra reservada "break" para que se salga del switch
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    default:                    //en caso de no cumplir ninguna condicion si se añade el default sale por aqui
        console.log('No es Lunes, Martes o domingo');   
        break;                  // no es necesario en el ultimo valor 
    /*
    case 3:
        console.log('Miercoles');
        break;
    case 4:
        console.log('Jueves');
        break;
    case 5:
        console.log('Viernes');
        break;
    case 6:
        console.log('Sabado');
        break;
    */
};    
