'use strict';

var addBtn = document.querySelector('.btn__add');
var todoList = document.querySelector('.list-tasks');
addBtn.addEventListener('click', function (e) {
  e.preventDefault();
  var inpText = document.querySelector('.input__new-list');

  if (inpText.value.length > 0) {
    var newListItem = document.createElement('li');
    var removeIcon = document.createElement('button'); // new li in ul

    newListItem.innerHTML = inpText.value; // add to new li close btn

    removeIcon.innerHTML = "\xD7";
    removeIcon.classList.add('close-icon'); // insert to DOM

    newListItem.appendChild(removeIcon);
    todoList.appendChild(newListItem); //clear input

    inpText.value = '';
    inpText.placeholder = "Type new task here"; //remove li

    removeIcon.addEventListener('click', function (e) {
      e.target.parentElement.style.opacity = ".5";
    });
  } else {
    inpText.placeholder = "This field is empty! :)";
  }
});