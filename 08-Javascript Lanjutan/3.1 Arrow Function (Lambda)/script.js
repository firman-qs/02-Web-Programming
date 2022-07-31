let mahasiswa = ['Winter Wyvern', 'Storm Spirit', 'Dragon Knight'];

const panjang = mahasiswa.map((element) => element.length)
console.log(panjang)

const namaDanPanjang = mahasiswa.map((element) => ({Name : element, Jumlah : element.length}))
console.table(namaDanPanjang)