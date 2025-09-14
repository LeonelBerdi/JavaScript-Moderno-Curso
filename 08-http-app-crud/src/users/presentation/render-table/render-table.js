import "./render-table.css";
import usersStore from '../../store/users-store';
import { User } from "../../models/user";
import { showModal } from "../render-modal/render-modal"


let table;

const createTable = () => {
    const table = document.createElement('table');
    const tableHeaders = document.createElement('thead');
    tableHeaders.innerHTML = `
        <tr>
            <th>#ID</th>
            <th>#Balance</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Active</th>
            <th>Actions</th>
        </tr> 
    `;

    const tableBody = document.createElement('tbody');
    table.append( tableHeaders, tableBody);
    return table;
}   


/**
 * @param {MouseEvent} event 
 */
const tableSelectListener = ( event ) => {
    // console.log(event.target) //ver donde se hace click
    const element = event.target.closest('.select-user');
    // console.log(element);
    
    if ( !element ) return;

    const id = element.getAttribute('data-id');
    // console.log(id);

    showModal(id);
    
}




/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderTable = ( element ) => {

    const users = usersStore.getUsers();

    if ( !table ) {
        table = createTable();
        element.append( table );

        //TODO: listeners a la table
        //table.addEventListener('click', event => tableSelectListener(event)); optimizo una funcion con unico argumento
        table.addEventListener('click', tableSelectListener );
    }

    let tableHTML = '';
    users.forEach( user => {
        tableHTML += `
            <tr>
                <td>${ user.id }</td>
                <td>${ user.balance }</td>
                <td>${ user.firstName }</td>
                <td>${ user.lastName }</td>
                <td>${ user.isActive }</td>
                <td>
                    <a href="#/" class="select-user" data-id="${ user.id }">Select</a>
                    |
                    <a href="#/" class="delete-user" data-id="${ user.id }">Delete</a>
                </td> 
            </tr>
        `

    })

    table.querySelector('tbody').innerHTML = tableHTML;

}