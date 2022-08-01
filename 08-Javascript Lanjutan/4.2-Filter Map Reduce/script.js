const angka = [1, 2, 3, 4, 5];

// menggunakan for loop
// const angkaBaru = []
// for (let i = 0; i < angka.length; i++) {
//     if (angka[i] >= 3) {
//         angkaBaru.push(angka[i]);
//     }
// }
// console.log(angkaBaru);

// Menggunkan Filter (angka >= 3)
// const angkaBaru = angka.filter(e => e >= 3)
// console.log(angkaBaru)

// Menggunkan Map (semua angka dikali 2)
// const angka2x = angka.map(a => a*2)
// console.log(angka2x)

// Menggunakan Reduce
// Menjumlahkan seluruh angka pada array
// 1 + 2 + 3 + 4 + 5
// const jumlahAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 2)
// console.log(jumlahAngka)

// method chaining
// cari angka lebih dari 2
// kalikan 3
// jumlahkan semuanya + 5
const hasil = angka.filter(a => a > 2).map(a => a * 3).reduce((x, y) => x + y, 5)
console.log(hasil)









