// membuat objek menggunaan function
// function mahasiswa(nama,tinggi,energi) {
//     const mhs = {};
//     mhs.nama = nama;
//     mhs.tinggi = tinggi;
//     mhs.energi = energi;
//     mhs.tidur = function(durasi) {
//         mhs.energi += durasi;
//     } // kurang efektif karena fungsi selalu dipanggu meski tdk digunakan, terdapat duplikasi fungsi
//     return mhs;
// }

// const mhs1 = mahasiswa('sandhika',180,30)
// console.log(mhs1, typeof(mhs1))
// console.log(mhs1.tidur(2))
// console.log(mhs1, typeof(mhs1))


// Meunggunakan cara 2
// const methodMahasiswa = {
//     tidur: function (durasi) {
//         this.energi += durasi;
//     }
// }
// function mahasiswa(nama, tinggi, energi) {
//     const mhs = Object.create(methodMahasiswa);
//     mhs.nama = nama;
//     mhs.tinggi = tinggi;
//     mhs.energi = energi;
//     // mhs.tidur = function (durasi) {
//     //     mhs.energi += durasi;
//     // } // kurang efektif karena fungsi selalu dipanggu meski tdk digunakan, terdapat duplikasi fungsi
//     return mhs;
// }

// const mhs1 = mahasiswa('sandhika',180,30)
// console.log(mhs1, typeof(mhs1))
// console.log(mhs1.tidur(2))
// console.log(mhs1, typeof(mhs1))

// Menggunakan Prototype
// function Mahasiswa(nama, tinggi, energi) {
//     this.nama = nama;
//     this.tinggi = tinggi;
//     this.energi = energi;
// }

// Mahasiswa.prototype.tidur = function (durasi) {
//     this.energi += durasi;
// }

// const mhs1 = new Mahasiswa('Sandhika', 180, 30)
// console.log(mhs1, typeof(mhs1))
// console.log(mhs1.tidur(2))
// console.log(mhs1, typeof(mhs1))

// console.log(Mahasiswa.prototype)


// Class Notation dari prototype
class Mahasiswa {
    constructor(nama, tinggi, energi) {
        this.nama = nama;
        this.tinggi = tinggi;
        this.energi = energi;
    } 

    tidur = function (durasi) {
        this.energi += durasi;
        
    }
}

const mhs1 = new Mahasiswa('Sandhika', 180, 30)