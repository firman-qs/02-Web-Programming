// Manipulasi Array

// Cara Manual

// // 1. Menamah Elemen Array ==> push()
// var arr = [];
// arr[0] = 'Davion';
// // array 1 terlewat, akan diisi nilai empty
// arr[2] = 'pangolier';
// arr[4] = 'Marci';
// arr.push('Mirana',1,true);

// console.log(arr);


// // 2. Menghapus Elemen Array
// var arr2 = ['Firman', 'Qashdus', 'Sabil'];
// arr2[0] = undefined //menghapus array pada index 0
// console.log(arr2);


// 3. Menampilkan Elemen Array
// var array3 = ["Firman","Qashdus","Sabil"];
// for (var x in array3) {
//     console.log(array3[x])
// }


// Menggunakan array method 
var array4 = ["Earth","Ember","Storm"];

// console.log(array4.join('**')) // menggabungkan array menjadi satu string

// method push & pop
array4.push("Marci","Mirana","Davion"); // .push() --> Menambahkan data di paling akhir
console.log(array4);

console.log('ambil: '+ array4.pop()); // .pop() --> Mengambil data terakhir
console.log(array4);

// method shift, unshift
console.log('ambil: ' + array4.shift()); // ambil data pada i ke 0
console.log(array4);

array4.unshift("Earth","Davion") // tambahkan data pada i ke 0
console.log(array4);