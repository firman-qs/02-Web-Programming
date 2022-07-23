function volumeKubus(sisi) {
    return sisi**3
}


function jumlahVolumeDuaKubus(sisiKubus1,sisiKubus2) {
    return (sisiKubus1**3)+(sisiKubus2**3)
}


console.log('Fungsi ke-satu: ' + (volumeKubus(8)+volumeKubus(3)))
console.log('Fungsi ke-dua: ' + jumlahVolumeDuaKubus(8,3))