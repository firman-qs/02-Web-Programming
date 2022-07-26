// // DOM Selection

// // document.getElementById => return element
// const judul = document.getElementById('judul'); // ==return=> element
// judul.style.color = 'red';
// judul.style.backgroundColor = '#eee';
// judul.innerHTML = 'Hallo Dunia'


// // document.getElementsByTagName => return HTMLCollection
// const tagP = document.getElementsByTagName('p');
// for (let x of tagP) {
//     x.style.backgroundColor = 'skyblue';
// }

// const tagH1 = document.getElementsByTagName('h1')[0];
// tagH1.style.fontSize = '50px'


// // document.getElementsByClassName => return HTMLCollection
// const clssP1 = document.getElementsByClassName('p1');
// clssP1[0].innerHTML = 'Paragraf satu diubah oleh Javascript'


// // document.querySelector()
// const secB = document.getElementById('b')
// const csItem1 = secB.querySelector('li')
// csItem1.style.backgroundColor = 'Orange'

// const csItem2 = secB.querySelector('ul li:nth-child(2)') 
// csItem2.style.backgroundColor = 'lightgreen'

// document.querySelectorAll()
const csaP = document.querySelectorAll('p')
for (let x of csaP) {
    x.style.backgroundColor = 'skyblue';
}