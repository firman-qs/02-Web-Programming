// const areaPlayer = document.querySelector('.area-player');
// const areaKomputer = document.querySelector('.area-komputer');
const info = document.querySelector('.info'); //info
const imgKomputer = document.querySelector('img.img-komputer');
const playerGajah = document.querySelector('ul li img.gajah');
const playerOrang = document.querySelector('ul li img.orang');
const playerSemut = document.querySelector('ul li img.semut');
var p
var hasil
var comp

function pilihan(pilihan) {
    p = pilihan;
    comp = Math.random();
    if (comp <= 0.33) {
        comp = 'gajah';
        imgKomputer.setAttribute('src', 'img/gajah.png');
    } else if (comp > 0.33 && comp <= 0.67) {
        comp = 'semut';
        imgKomputer.setAttribute('src', 'img/semut.png');
    } else {
        comp = 'orang';
        imgKomputer.setAttribute('src', 'img/orang.png');
    }
}

function rule() {
    if (p == comp) {
        hasil = 'SERI';
    } else if (p === 'gajah') {
        hasil = (comp == 'semut') ? 'KALAH' : 'MENANG'
    } else if (p === 'semut') {
        hasil = (comp == 'gajah') ? 'MENANG' : 'KALAH'
    } else if (p === 'orang') {
        hasil = (comp == 'gajah') ? 'KALAH' : 'MENANG'
    }
}

playerGajah.addEventListener('click', () => {
    pilihan('gajah');
    rule()
    info.innerHTML = hasil;
})
playerOrang.addEventListener('click', () => {
    pilihan('orang');
    rule()
    info.innerHTML = hasil;
})
playerSemut.addEventListener('click', () => {
    pilihan('semut');
    rule()
    info.innerHTML = hasil;
})

