// Destructuring Function

// Destructure return value
// const jumlahKali = function (a, b) {
//     const sum = a + b
//     const times = a * b
//     return { jumlah: sum, kali: times }
// }

// const {jumlah, kali} = jumlahKali(3,5)
// console.log(jumlah)

// Destructure argumen
const mhs1 = {
    nama: "Ucup Surucup",
    umur: 19,
    email: "ucup@umail.com",
    nilai: {
        tugas: 85,
        uts: 85,
        uas: 92
    },
    rata2: function () {
        return (this.nilai.tugas + this.nilai.uas + this.nilai.uts) / Object.keys(this.nilai).length
    }
}


const cetakMhs = function ({ nama, umur, email, nilai: { uas, uts, tugas } },mhs) {
    return `Halo, nama saya ${nama}, saya berumur ${umur} tahun, dan nilai saya tugas = ${tugas}, uts = ${uts}, uas = ${uas}, rata-rata nilai = ${mhs.rata2()}. email: ${email}`
}

const coba = function (mhs) {
    return mhs.rata2()
}


console.log(cetakMhs(mhs1,mhs1))
console.log(coba(mhs1))



