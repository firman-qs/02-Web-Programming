// function halo (nama) {
//     return alert(`Halo, ${nama}`);
// }
// function tampilkanPesan(pesan) {
//     const input  = prompt('Masukkan nama: ')
//     pesan(input) 
// }
// tampilkanPesan(halo)

// Asynchronous callback
function getDataMahasiswa(url, success, error) {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                success(xhr.response);
            } else if (xhr.status === 404) {
                error();
            }
        }
    }

    xhr.open('get', url);
    xhr.open('get', url);
    xhr.send();

}

console.log("mulai")
getDataMahasiswa('data/mahasiswa.json', result => {
    const mhs = JSON.parse(result); mhs.forEach(m => console.log(m.nama))
}, () => {
})
console.log("selesai")