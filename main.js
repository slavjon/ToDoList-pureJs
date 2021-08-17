'use strict'

let addBtn = document.querySelector('.btn__add');
let todoList = document.querySelector('.list-tasks');

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let inpText = document.querySelector('.input__new-list');

    if (inpText.value.length > 0) {
        let newListItem = document.createElement('li');
        let removeIcon = document.createElement('button');
        // new li in ul
        newListItem.innerHTML = inpText.value;
        // add to new li close btn
        removeIcon.innerHTML = "\u00D7";
        removeIcon.classList.add('close-icon');
        // insert to DOM
        newListItem.appendChild(removeIcon);
        todoList.appendChild(newListItem);
        //clear input
        inpText.value = '';
        inpText.placeholder = "Type new task here";
        //remove li
        removeIcon.addEventListener('click', (e) => {
            e.target.parentElement.style.opacity = ".5";
        });
    } else {
        inpText.placeholder = "This field is empty! :)";
    }
});