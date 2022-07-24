
// forEach
// var arr = [['Tiny',25,150],['Dawnbreaker',30,180],['Zeus',100,170]];

// arr.forEach(element => {
//     console.log(`Nama   : ${element[0]}\nUmur   : ${element[2]} kg\nTinggi : ${element[2]} cm`);
// });

// arr.forEach(function(e) {
//     console.log(`Nama   : ${e[0]}\nUmur   : ${e[2]} kg\nTinggi : ${e[2]} cm`);
// });

// //
// var angka = [1,2,3,4,5,6];

// angka.forEach(function(element, index) {
//     console.log((element**2) +'  pangkat2dari  '+ (index+1));
// })


// forEach tidak mengembalikan array

// map, mengambalikan array

// var angka = [1,2,3,4,5,6,7,8];

// var angka2 = angka.map(function(e){
//     return e**2;
// })

// console.log(angka2);


// sort
var angka = [1,10,20,23,6,8,93];

// angka.sort((x,y)=>x-y) // sama saja, ini adalah lambda function
angka.sort(function(x,y){
    return x-y;
})

console.log(angka)


var string = ['Marci','Io','Dawnbreaker', 'Winver wyvern', 'Void']
string.sort() // default urutkan berdasarkan abjad pertama

console.log(string) 

string.sort((a, b)=>a.length-b.length) // urutkan berdasarkan panjang string
console.log(string) 