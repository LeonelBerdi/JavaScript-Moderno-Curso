import usersStore from './store/users-store.js';
import { renderTable } from './presentation/render-table/render-table.js';               
import { renderButtons } from './presentation/render-buttons/render-buttons.js';
import { renderAddButton } from './presentation/render-add-button/render-add-button.js';

/**
 * 
 * @param {HTMLDivElement} element
 */
export const UsersApp = async( element ) => {

    element.innerHTML = 'Loading...';
    await usersStore.loadNextPage();
    element.innerHTML = '';

    renderTable(element);
    renderButtons(element);
    renderAddButton(element);



    // console.log( usersStore.getUsers() );
}