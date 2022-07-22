var deretBintang = '';
var kosong = '';
var bintang = '';
var layn = 10;

for (var baris = 0; baris < layn; baris++) {
    for (var star = layn; star > baris; star--) {

        bintang += '*';
    }
    for (var spasi = 0; spasi < baris; spasi++) {

        kosong += ' ';
    }
    deretBintang += kosong + bintang;
    deretBintang += '\n';
    kosong = ''
    bintang = ''
}
console.log(deretBintang + 'segitiga sk-sk terbalik \n\n')



kosong = '';
bintang = '';
deretBintang = '';

for (var baris = 0; baris < layn; baris++) {
    if (baris % 2 == 1) {
        for (var star = 0; star < baris; star++) {

            bintang += '*';
        }
        for (var spasi = layn; spasi > baris/2; spasi--) {

            kosong += ' ';
        }
        deretBintang += kosong + bintang + kosong;
        deretBintang += '\n';
        kosong = ''
        bintang = ''
    }
}
console.log(deretBintang + 'segitiga ss \n\n')



kosong = '';
bintang = '';
deretBintang = '';

for (var baris = 0; baris < layn; baris++) {
    bintang = ''
    kosong = ''
    if (baris % 2 == 1) {
        for (var star = layn; star > baris; star--) {
            bintang += '*';
        }
        for (var spasi = 0; spasi < baris / 2; spasi++) {

            kosong += ' ';
        }
        deretBintang += kosong + bintang + kosong;
        deretBintang += '\n';
    }
}
console.log(deretBintang + 'segitiga ss terbalik \n\n')




kosong = '';
bintang = '';
deretBintang = '';
for (var baris = 0; baris < layn; baris++) {
    bintang = ''
    kosong = ''
    if ((baris % 2 == 1) && (baris <= (layn / 2))) {
        for (var spasi = layn / 4; spasi > baris / 2; spasi--) {
            kosong += ' ';
        }
        for (var star = 0; star < baris; star++) {

            bintang += '*';
        }
        deretBintang += kosong + bintang + kosong;
        deretBintang += '\n';
    }
    else if ((baris % 2 == 1) && (baris > (layn / 2))) {
        for (var star = layn; star > baris; star--) {
            bintang += '*';
        }
        for (var spasi = layn / 4; spasi < baris / 2; spasi++) {

            kosong += ' ';
        }
        deretBintang += kosong + bintang + kosong;
        deretBintang += '\n';
    }
}
console.log(deretBintang + 'belah ketupat \n\n')


kosong = '';
bintang = '';
var trapesium = '';

for (var baris = 6; baris < layn; baris++) {
    bintang = ''
    kosong = ''
    if (baris % 2 == 0) {

        for (var star = 0; star < baris; star++) {
            bintang += '*';
        }

        for (var space = layn / 2; space > baris / 2; space--) {
            kosong += ' ';
        }

        trapesium += kosong + bintang + kosong;
        trapesium += '\n';
    }

}
console.log(trapesium + 'trapesium \n\n')













