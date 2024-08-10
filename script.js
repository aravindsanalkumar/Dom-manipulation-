// DOM Manipulation 


//getElementById()

let titlexxx = document.getElementById('main-heading');


//getElementByClassName()

let listItemxxx = document.getElementsByClassName('list_items');


//getElementByTagName()
let listItemByTagxxx = document.getElementsByTagName('li');



//querySelector()
let containerxxx = document.querySelector('div');


//querySelectorAll()

let liAllxxx = document.querySelectorAll('li');


//Dom manipulation 

const title = document.querySelector('#main_heading');
title.style.color = 'red';
const listItems =  document.querySelectorAll('.list_items');
for(let i = 0;i < listItems.length;i++){
    listItems[i].style.backgroundColor = 'lightblue';
}

//Creating Elements
const ul = document.querySelector('ul');
const li = document.createElement('li');
ul.append(li);
li.textContent = 'Spiderman';

const firstListItem = document.querySelector('.list_items');
console.log(firstListItem.innerHTML);
console.log(firstListItem.innerText);
console.log(firstListItem.textContent);

//Modifying attribute and classes
const newElement = document.createElement('li');
ul.append(newElement);
newElement.textContent = "A V A T A R";
newElement.setAttribute('class','list_item');
newElement.removeAttribute('class','list_item');
const extraElement = document.createElement('li');
ul.append(extraElement);
extraElement.textContent = 'I N T E R S T E L L A R ';
extraElement.classList.add('list_item')
console.log(extraElement.getAttribute('class'));
extraElement.classList.remove('list_item')

