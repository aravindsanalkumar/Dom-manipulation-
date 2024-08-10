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
console.log(extraElement.classList.contains('list_item'))
extraElement.classList.remove('list_item');
newElement.remove();
extraElement.remove();
li.remove();

//Traversing the DOM


//Parent Node traversal

let ulT = document.querySelector('ul');
console.log(ulT.parentElement.parentElement);
console.log(ulT.parentNode);

const html = document.documentElement;
console.log(html);
console.log(html.parentElement);
console.log(html.parentNode);

//Child Node traversal
console.log(ulT.childNodes);
console.log(ulT.firstChild);
console.log(ulT.lastChild);
ulT.childNodes[3].style.backgroundColor = 'blue'

console.log(ulT.children);
console.log(ulT.firstElementChild);
console.log(ulT.lastElementChild);

//Sibling Node Traversal

const ulS = document.querySelector('ul');
console.log(ulS.previousSibling);
console.log(ulS.nextSibling);





