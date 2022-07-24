// https://www.youtube.com/watch?v=3-Grei4X2NI&list=PLFIM0718LjIWXagluzROrA-iBY9eeUt4w&index=34&t=1s
// youtube: web programming unpas

// function declaration
// menggunakan konsep hoisting, dapat dipanggil sebelum dideklarasikan

sayHallo('Marci')
function sayHallo(name) {
    console.log('Hello '+name)
}


// function expression
// lebih powerfull
// digunaan pada javascript lanjutan/modern

// katakanHalo('Mirana') // will not run
var katakanHalo = function(nama) {
    console.log('Hello '+nama)
}

katakanHalo('Mirana')

const person = {fname:"John", lname:"Doe", age:25};
let text = "";
for (let x in person) {
    text += person[x] + " ";
}
console.log(text)
