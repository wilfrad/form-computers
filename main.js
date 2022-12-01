import { addDevice, viewDataTable } from './scripts/components.js';

const container = document.getElementById('container');
var paintView;
var idOldElement = '';
window.addEventListener('load', async () => {
    const navBtnForm = document.getElementById('nav-btn-form')
    const navBtnTable = document.getElementById('nav-btn-table')
    navBtnForm.addEventListener('click', () => {
        navBtnForm.classList.add('active');
        navBtnTable.classList.remove('active');
        container.insertAdjacentHTML('beforeend', addDevice);
    })
    navBtnTable.addEventListener('click', () => {
        navBtnTable.classList.add('active');
        navBtnForm.classList.remove('active');
        container.insertAdjacentHTML('beforeend', viewDataTable);
    })
    paintView = (idNewElement, item) => {
        if (idOldElement !== '') {
            document.getElementById(idOldElement).remove();
        }
        form.insertAdjacentHTML('beforeend',
            document.getElementById(idNewElement) === null ? html : '');
        idOldElement = idNewElement;
    }
});