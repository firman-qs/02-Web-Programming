
var angka = [1,11,21,5,3,4,2,5,7,6,10];

// filte => mencari "beberapa" element dalam bentuk keluaran array
var angka2 = angka.filter(element => element<10);
var angka3 = angka.filter(function(e){
    return e > 10;
})

console.log(angka2);
console.log(angka3);

// find => mencari "satu" elemen saja
var angka4 = angka.find(element => element>1)

console.log(angka4);


