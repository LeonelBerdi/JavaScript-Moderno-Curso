import './render-modal.css';
import modalHtml  from './render-modal.html?raw'; //?raw es para importar en vite un html


let modal, form;


//TODO: cargar usuario por id
export const showModal = () => {
    modal?.classList.remove('hide-modal');

}

export const hideModal = () =>{
    modal?.classList.add('hide-modal');
    form?.reset();
    
}



/**
 * 
 * @param {HTMLDivElement} Element
 * @param {(userLike)=> Promise<void>} callback
 */
export const renderModal = ( Element, callback ) => {

    if (modal) return;

    modal = document.createElement('div');
    modal.innerHTML = modalHtml;
    modal.className ='modal-container hide-modal';
    form = modal.querySelector('form');


    modal.addEventListener('click', (event) => {
        /* Una opcion es esta 
        if ( event.target.className !== 'modal-container') return;
        */
        if ( event.target.className === 'modal-container') {
            hideModal();
        };
    });

    form.addEventListener('submit', async (event) =>{
        event.preventDefault();

        const formData = new FormData( form );  
        const userLike = {};

        // for (const iterator of formData ) { desestructuro iterator me devulve pares de valores 
        for (const [key, value] of formData ) { // me devuelve pares de valores ['firstname', 'leonel'], ['LastName', 'Berdi'], ['balance', '123456,789'], ['is Active','on']
            if ( key === 'balance' ) {
                userLike[key] = +value;  //convierte el valor de tipo string de la propiedad a numero es lo mismo que poner data[key] = Number(value)
                continue;
            }

            if ( key === 'isActive' ) {
                userLike[key] = (value === 'on') ? true : false;
                continue;
            }

            userLike[key] = value;
                        

        }

        //console.log(userLike);
        await callback( userLike );


        hideModal();

    });

    Element.append( modal );


}

