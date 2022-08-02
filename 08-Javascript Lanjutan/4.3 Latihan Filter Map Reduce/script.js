// Ambil semua Element video
const video = Array.from(document.querySelectorAll('[data-duration]')) //ubah menjadi array  dgn "Array.from()"

// Pilih hanya yang Js Lanjutan
const jsLanjutan = (video.filter(v => v.textContent.includes('Js Lanjutan')))

// Ambil Durasi masing-masing Video
const durasi = function () {
    const hitung = jsLanjutan.map(js => js.dataset.duration)
        // Ubah durasaai menjadi int, ubah menit menjadi detik
        .map(dr => {return parseFloat(dr.slice(0, 2)) * 60 + parseFloat(dr.slice(3, 5))}) 
        // dapat jg menggunakan split. contoh: dr.split(":") ==> split berdasakan tanda ":"
        // .map(dr => {
        //     const parts = dr.split(":");
        //     return parseFloat(parts[0]) * 60 + parseFloat(parts[1])
        // })
        // jumlahkan semua detik
        .reduce((x, y) => x + y)
    // ubah format jadi jam menit detik
    return `${Math.floor(hitung / 60)}:${hitung % 60}`
}

// masukkan ke HTML
const spanJumlahVid = document.querySelector('.jumlah-video')
const spanDurasiVid = document.querySelector('.total-durasi')
spanJumlahVid.innerHTML = jsLanjutan.length
spanDurasiVid.innerHTML = durasi()
