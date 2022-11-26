import { itemFormLaptop } from './components.js';
import { itemFormDesktop } from './components.js';
import { itemFormAdditional } from './components.js';
var form = document.getElementById('container-forms');
var countFormItems = 1;
var isComplete = false;
window.addEventListener('load', async () => {
        const selectDevice = document.getElementById('select-device');
        var isSelected = 0;
        selectDevice.addEventListener('change', () => {
            isSelected = selectDevice.selectedIndex;
            if (isSelected === 1) {
                form.insertAdjacentHTML('beforeend', itemFormLaptop);
                form.insertAdjacentHTML('beforeend', itemFormAdditional);
            } else {
                form.insertAdjacentHTML('beforeend', itemFormDesktop);
                form.insertAdjacentHTML('beforeend', itemFormAdditional);
            }
            selectDevice.setAttribute('disabled', null);
        });
        var currentInputs = document.getElementById('form-general');
        currentInputs.addEventListener('change', () => {
            let inputs = currentInputs.getElementsByTagName('input');
            Array.from(inputs).forEach( element => {
                if (element.value.length > 0 && isSelected !== 0) {
                    isComplete = true;
                } else {
                    isComplete = false;
                }
            });
            if (isComplete === true) {
                buttonAdd.removeAttribute('disabled');
            } else {
                buttonAdd.setAttribute('disabled', null);
            }
        });
        const buttonAdd = document.getElementById('send-form');
        buttonAdd.addEventListener('click', () => {
            if (isComplete === true && countFormItems < 3) {
                countFormItems++;
            }
            if (countFormItems === 3) {
                buttonAdd.setAttribute('value', 'Add device');
                buttonAdd.removeAttribute('data-bs-target');
            }
        });
    }
);