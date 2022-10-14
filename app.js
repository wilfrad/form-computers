const nav_element = document.getElementById('nav-btn-from');
const form_element = document.getElementById("form-main");
var nav_element_hidden = true;
nav_element.addEventListener('click', hide_content);

function hide_content() {
    console.log('si');
    /*
    if (nav_element_hidden == false) {
        form_element.classList.add('hidden');
        nav_element_hidden == true;
    } else {
        form_element.classList.remove('hidden');
        nav_element_hidden == false;
    }*/
}