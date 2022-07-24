// slice ==> Mengambil beberapa bagian pada array untuk dijadikan array yang baru

// splice ==> menyisipkan elemen ditengah2


var arr = ['Void','Earth','Ember','Storm','Mirana','Bristleback','Pangolier','Slark'];

// splice
// arr.splice(indexAwal,mauDihapusBerapa,'elemen Baru')
arr.splice(3,2,'Kunkka'); // beda dgn python [x,n]
console.log(arr); //  splice berpengaruh pada array

// slice
// console.log(arr.slice(indexAwal,indexAkhir+1));
console.log(arr.slice(1,3)); // sama seperti python [x,n), slice tidak berpengaruh langsung pada array
console.log(arr); // sama seperti python [x,n)
