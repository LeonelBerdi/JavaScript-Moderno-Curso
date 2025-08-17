import { v4 as uuid } from 'uuid';

export class Todo {

    /**
     * 
     * @param {String} description 
     */

    constructor( description ){
        if( !description ) throw new Error('La descripcion es obligatoria');
        this.id = uuid(); //llamo a la funcion del paquete de uuid que he importado.
        this.description = description;
        this.done = false;
        this.createdAt = new Date();
    }


}