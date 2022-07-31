// Closure, ketika sebuah funtion mengakses/lexical scope pada parrent

// contoh
// function init() {
//     let nama = 'Hoodwink'
//     function hello() {
//         console.log(nama) // menakses "let nama"
//     }
//     hello()
// }
// init()



// contoh 2
// function init() {
//     // let nama = 'Hoodwink'
//     return function (nama) {
//         console.log(nama); // menakses "let nama"
//     };
// };
// let call = init();
// call('Bro')


// Factory function
// Contoh 3
// function ucapSalam(waktu) {
//     return function (nama) {
//         console.log(`Hallo ${nama}, Selamat ${waktu}`)
//     }
// }

// var panggil1 = ucapSalam('Sore')
// var panggil2 = panggil1('Mirana')

// console.dir


// Contoh 4
let init = function() {
    let counter = 0;
    // let add = function () {
    //     return ++counter
    // };
    return function () {
        return ++counter
    };
}();

counter = 100;

console.log(init());
console.log(init());
console.log(init());
console.log(init());
























