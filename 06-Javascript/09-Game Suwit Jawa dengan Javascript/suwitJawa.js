var isContinue = true;
while (isContinue) {
    // pilihan player
    var p = prompt('Pilih : gajah, semut, orang');
    
    // pilihan computer
    var comp = Math.random()

    if (comp <= 0.33) {
        comp = 'gajah';
    } else if (comp > 0.33 && comp <= 0.67) {
        comp = 'semut';
    } else {
        comp = 'orang';
    }

    // rules
    if (p == comp) {
        alert('Hasil Seri');
    } else if (p == 'gajah') {
        // if (comp == 'semut') {
        //     alert(`Kamu memilih ${p}, komputer memilih ${comp}\nKAMU KALAH!`);
        // } else {
        //     alert(`Kamu memilih ${p}, komputer memilih ${comp}\nKAMU MENANG!`);
        // }
        hasil = (comp == 'semut') ? 'KALAH':'MENANG'
    } else if (p == 'semut') {
        hasil = (comp == 'gajah') ? 'MENANG':'KALAH'
    } else if (p == 'orang') {
        hasil = (comp == 'gajah') ? 'KALAH': 'MENAG'
    } else (
        hasil = 'memasukkan pilihan yang salah'
    )

    // hasil
    alert(`Kamu memilih ${p}, komputer memilih ${comp}\nHasilnya: KAMU ${hasil}!`);

    var lanjut = confirm('Mau Lanjut bang?');
    isContinue = lanjut;

}


alert('Terima kasih sudah bermain')