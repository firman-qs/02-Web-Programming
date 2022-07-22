var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

while (noAngkot <= angkotBeroperasi) {
    console.log(`Angkot No. ${noAngkot}\t==>\tberoperasi dengan baik.`);
    noAngkot++;
}

for (; noAngkot <= jmlAngkot; noAngkot++) {
    console.log(`Angkot No. ${noAngkot}\t==>\tsedang tidak beroperasi.`);
}
