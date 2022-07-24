// contoh data mahasiswa: nama, umur, tinggi
// mirip python list, tapi hanya iterate index
var mahasiswa = [
    ['Firman Qa.',18,173],
    ['Qashdus Sa.',19,177],
    ['Sabil Fi.',20,180]
];

console.log(mahasiswa[0][0])

for (var x in mahasiswa) {
        console.log(`Nama: ${mahasiswa[x][0]}, Umur: ${mahasiswa[x][1]}, Tinggi: ${mahasiswa[x][2]}`)
}