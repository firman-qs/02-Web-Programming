var angka = Number(prompt('Masukkan Angka: (antara 1-10)'));

switch (angka) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
        alert('Anda memasukkan angka GANJIL')
        break;
    case 2:
    case 4:
    case 6:
    case 8:
    case 10:
        alert('Anda memasukkan angka GENAP')
        break
    default:
        alert('Anda memasukkan angka yang SALAH !')
        break;
}




// var jmlAngkot = 10;
// var angkotBeroperasi = 6;
// var x = true

// for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
//     if ((noAngkot <= angkotBeroperasi) && (noAngkot !== 5)) {
//         console.log(`Angkot No. ${noAngkot} beroperasi dengan baik.`);
//     } else if ((noAngkot === 8) || (noAngkot === 10) || (noAngkot === 5)) {
//         console.log(`Angkot No. ${noAngkot} sedang lembur.`);
//     } else {
//         console.log(`Angkot No. ${noAngkot} sedang tidak beroperasi.`);
//     }
// }

