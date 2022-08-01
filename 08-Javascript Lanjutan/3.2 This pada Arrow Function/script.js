// Constructor function
// const Mahasiswa = function() {
//     this.nama = 'Nature Prophet';
//     this.umur = 19;
//     this.sayHalo = function() {
//         console.log(`Halo, nama saya ${this.nama} dan saya ${this.umur} tahun`)
//     };
// };

// const np = new Mahasiswa();
// np.sayHalo()


// const Mahasiswa = () => { // tdk bisa membuat constructor dengan arrow
// tdk ada konsep this pada arrow
const Mahasiswa = function () {
    this.nama = 'Nature Prophet';
    this.umur = 19;
    this.sayHalo = () => { 
        // method dalam "constructor" bisa menggunakan arrow (namun tdk jika menggunakan "obj literal")
        // this mengacu pada leksikal scope
        console.log(`Halo, nama saya ${this.nama} dan saya ${this.umur} tahun`)
    };
};

const np = new Mahasiswa();
np.sayHalo()


// Jika menggunakan objek literal
// method tdk boleh arrow function
// karena tdk ada konsep this pada arrow fn 

var [satu, dua] = ['one','two'] //multivarable assign
console.log(satu)












