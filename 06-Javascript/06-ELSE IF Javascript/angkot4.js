var jmlAngkot = 10;
var angkotBeroperasi = 6;
var x = true
for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
    if (noAngkot <= angkotBeroperasi) {
        console.log(`Angkot No. ${noAngkot} beroperasi dengan baik.`);
    } else if (noAngkot == 8) {
        console.log(`Angkot No. ${noAngkot} sedang lembur.`);
    } else {
        console.log(`Angkot No. ${noAngkot} sedang tidak beroperasi.`);
    }
}

// console.log('\nCara kedua dengan nested\n ')

// for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
//     if (noAngkot <= angkotBeroperasi) {
//         console.log(`Angkot No. ${noAngkot} beroperasi dengan baik.`);
//     } else {
//         if (noAngkot == 8) {
//             console.log(`Angkot No. ${noAngkot} sedang lembur.`);
//         } else {
//             console.log(`Angkot No. ${noAngkot} sedang tidak beroperasi.`);
//         }
//     }
// }

