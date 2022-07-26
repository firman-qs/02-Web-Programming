function ubahWarna() {
    p3.style.backgroundColor = 'LightBlue'
    this.style.backgroundColor = 'LightBlue'
}

const p3 = document.querySelector('.p3')
const p2 = document.querySelector('.p2')
p2.onclick = ubahWarna;

// addEventListener() ==> recomended
const p4 = document.querySelector('#b p')
// p4.onclick = tambahItem // manual dengan onclick
document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.altKey) {
        const ul = document.querySelector('#b ul')
        const itemBaru = document.createElement('li');
        const textLi = document.createTextNode(`Item baru`);
        itemBaru.appendChild(textLi);
        ul.appendChild(itemBaru);
    }
}) // tambahkan item baru ketika ctrl + alt



/* daftar Event dalam DOM 
https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent
*/
