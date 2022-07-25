
// Cara membuat object

// cara literal
var mahasiswa = {
    nama : 'Meepo',
    offering : 'AC',
    nilai : [90,87,96,92],
    rata2 : function() {
        var total = 0
        for (var i = 0; i<this.nilai.length; i++){
            total += this.nilai[i]
        }
        return total/4
    }
}

console.log(mahasiswa.rata2())


// menggunakan function declaration
function buatObjectMahasiswa(nama, offering, nilai) {
    var mhs = {};
    mhs.nama = nama;
    mhs.offering = offering;
    mhs.nilai = nilai;
    mhs.rata2 = function() {
        var total = 0;
        for (var i = 0; i < nilai.length; i++){
            total += nilai[i];
        }
        return total/4;
    }
    return mhs
}

var mahasiswa2 = buatObjectMahasiswa('Razor','X',[85,85,85,85])
console.log(mahasiswa2.rata2())


// menggunakan constructor function (keyword new)
function Mahasiswa(nama,offering,nilai) {
    this.nama = nama;
    this.offering = offering;
    this.nilai = nilai;
    this.rata2 = function () {
        var total = 0;
        for (var i = 0; i < this.nilai.length; i++){
            total += this.nilai[i];
        }
        return total/4;
    }
    console.log(this)
    
}


var mahasiswa3 = new Mahasiswa('Davion','Z',[92,92,92,92])
console.log(mahasiswa3)
console.log(mahasiswa3.rata2())


var mahasiswa4 = new Mahasiswa('Mirana','Z',[92,90,90,92])
console.log(mahasiswa4.rata2())

// Object.create()




// 
function Halo() {
    console.log(this)
}

var x1 = new Halo()