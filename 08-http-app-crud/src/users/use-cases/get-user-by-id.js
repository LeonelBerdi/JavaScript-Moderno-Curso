import { localhostUserToModel } from "../mappers/localhost-user.mapper.js";
import { User } from "../models/user.js";


/**
 * 
 * @param {String|Number} id 
 * @returns { Promise<User>}
 */
export const getUserById = async( id ) =>{   //recibo el page y sino recibo nada le doy el valor 1 por defecto.
    // esta linea de abajo es lo mismo que http://localhost:3001/users?_page=2
    const url = `${ import.meta.env.VITE_BASE_URL }/users/${ id }`;          //lo defino en mis varialbes de entorno archivo ".env"
    // console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    
    
      
    
//  const users = data.map( userLike => localhostUserToModel( userLike ) ); optimizo
    const user = localhostUserToModel( data );
    
    // console.log( {user} ); //compruebo el retorno de mi funcion
    return user;
}