


/**
 * 
 * @param {Number} page 
 * @returns
 */
export const loadUsersByPage = async( page = 1 ) =>{   //recibo el page y sino recibo nada le doy el valor 1 por defecto.
    // esta linea de abajo es lo mismo que http://localhost:3001/users?_page=2
    const url = `${ import.meta.env.VITE_BASE_URL }/users?_page=${ page }`;          //lo defino en mis varialbes de entorno archivo ".env"
    const res = await fetch(url);
    const data = await res.json();

    console.log(data);
}