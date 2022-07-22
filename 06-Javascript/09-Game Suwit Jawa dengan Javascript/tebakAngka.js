var ulang = true
while (ulang) {
    var chance = 3;
    var menang = false;
    var compNum = Math.floor(Math.random() * 10 + 1);

    alert(`Tebak angka 1-10\nKamu punya ${chance} kesempatan`);

    while (chance >= 1) {
        var pNum = parseInt(prompt('Masukkan angka tebakan'));

        if (pNum == compNum) {
            alert(`Anda BENAR,\nangka yang dicari adalah: ${compNum}`);
            menang = true;
            break;    
        } 
        
        else if (pNum < compNum) {
            chance -= 1;
            if (chance == 0) {
                alert(`Terlalu RENDAH,\nkesempatan anda HABIS`);
            } else {
                alert(`Terlalu RENDAH,\nayo masih ada ${chance} kesempatan`);
            }
        } 
        
        else if (pNum > compNum) {
            chance -= 1;
            if (chance == 0) {
                alert(`Terlalu TINGGI,\nkesempatan anda HABIS`);
            } else {
                alert(`Terlalu TINGGI,\nayo masih ada ${chance} kesempatan`);
            }
        }

    }

    if (menang == false) {
        alert(`Anda gagal, yang dicari adalah ${compNum}`)
    }

    ulang = confirm('Coba Lagi ?')
}

