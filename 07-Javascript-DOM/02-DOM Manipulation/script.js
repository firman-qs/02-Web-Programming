// Manipulasi Element

// innerHTML
const judul = document.querySelector('h1') ;
judul.innerHTML = '<div>Hello World dengan Javascript</div>'

// style
judul.style.backgroundColor = 'blue'


// setArttribute('atribute name', 'atribute value')
judul.setAttribute('id','judul')

const link = document.getElementsByTagName('a')[0];
link.setAttribute('href','a')
// xxx.getAttribute('atribute name')
// xxx.removeAttribute('atribute name')


// classList
// classList.add()
document.body.classList.add('darkMode')
document.body.classList.add('satu')
document.body.classList.add('dua')
document.body.classList.add('tiga')

// classlist.remove()
// document.body.classList.remove('darkMode')
// classList.toggle() // menambahkan jika belum ada, menghapus jika sudah ada
// document.body.classList.toggle('darkMode') // try in console

// classList.item(indexArray Class)
// classList.contains()
// classList.replace('old', 'new')


// Manipulasi Node