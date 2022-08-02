// Ambil semua Element video
const video = Array.from(document.querySelectorAll('[data-duration]'))

// Pilih hanya yang Js Lanjutan
const jsLanjutan = (video.filter(function (v) {
    if (v.innerHTML.includes('Js Lanjutan')) {
        return v
    }
}))

// Ambil Durasi masing-masing Video
const durasi = function () {
    const hitung = jsLanjutan.map((js) => 
    js.getAttribute('data-duration'))
      .map(function (dr) {
            return parseInt(dr.slice(0, 2)) * 60 + parseInt(dr.slice(3, 5))
       })
      .reduce((x, y) => x + y)
    // ubah format jadi jam menit detik
    return `${Math.floor(hitung / 60)}:${hitung % 60}`
}

// masukkan ke HTML
const spanJumlahVid = document.querySelector('.jumlah-video')
const spanDurasiVid = document.querySelector('.total-durasi')
spanJumlahVid.innerHTML = jsLanjutan.length
spanDurasiVid.innerHTML = durasi()
