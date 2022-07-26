// menambahkan Paragraf
// document.createElement()
const newP = document.createElement('p');

// document.createTextNode()
const newText = document.createTextNode('Paragraf 4 dengan Js');

// Node.appendChild()
newP.appendChild(newText);

const sectionA = document.getElementById('a')
sectionA.appendChild(newP)




// list item baru "item 1,5", antara item 1 dan item 2
// Node.insertBefore()
const liBaru = document.createElement('li')
const textBaru = document.createTextNode('item 1,5')
const ul = document.querySelector('#b ul')
const item2 = document.querySelector('ul li:nth-child(2)')

liBaru.appendChild(textBaru)

ul.insertBefore(liBaru,item2)


// parentNode.removeChild()
ul.removeChild(item2)

// parentNode.replaceChild()
const item1 = document.querySelector('#b ul li:last-child')
ul.replaceChild(newP, item1)
