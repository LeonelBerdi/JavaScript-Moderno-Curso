// Esta funcion Calcula el Valor que tiene la carta que recibe();

/**
 * Calcula el Valor que tiene la carta que recibe()
 * @param { String } carta Ejemplo: '10C','AH','2D' 
 * @returns { Number } valor de la carta Ejemplo: 1,2,3,...11
 */





export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}