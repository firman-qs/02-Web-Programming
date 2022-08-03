
const arr = [1, 2, 3, 4, 5, 6, 7, 'satu', 'dua']
const str = 'ini adalah string'

// for of ==> output item
// for (const [i,a] of arr.entries()) {
//     console.log(`${i} => ${a}`)
// }


// for in ==> output index, create a loop only iterating over enumerable object
const mhs = {
    nama : "Davion",
    kelas : "AC",
    umur : 19
}
// tdk dapat menggunakan "for of" karena mhs = object => tidak iterable
for (const m in mhs) {
    console.log(`${m}\t\t: ${mhs[m]}`)
}




























