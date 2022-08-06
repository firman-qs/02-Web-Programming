document.body.style.backgroundColor = '#333'
document.body.style.color = '#ddd'

// $.ajax({
//     url : "https://www.omdbapi.com/?apikey=dca61bcc&s=avengers",
//     success : result => {
//         console.log(result);
//     },
//     error : () => {
//         console.log(`error 404`)
//     }
// });


// vanilla javascript
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if (xhr.status === 200) {
//         if (xhr.readyState === 4) {
//             console.log(JSON.parse(xhr.response))
//         }
//     } else {
//         console.log(xhr.responseText)
//     }
// }

// xhr.open('get', 'https://www.omdbapi.com/?apikey=dca61bcc&s=avengers')
// xhr.send()

// modern javascript => fetch
// const movies = fetch('https://www.omdbapi.com/?apikey=dca61bcc&s=avengers')
// movies
// .then(response => response.json())
// .then(res => console.log(res));

// Promise
// Object yang merepresentasikan keberhasilan/kegagalan sebuah event-asynchronous yang akan terjadi dimasa mendatang
// janji(terpenuhi / ingkar)
// states(fulfilled / rejected / pending)
// callback(resolve / reject / finally)
// aksi(then / catch / finally)

// contoh 1
// let janji = false;
// const janji1 = new Promise((resolve, reject) =>{
//     if (janji === true) {
//         resolve('Janji ditepati')
//     } else {
//         reject('Janji tidak ditepati')
//     }
// })
// janji1.then(resolve => console.log(resolve)).catch(reject => console.log(reject))

// contoh 2
// let janji = true;
// const janji1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(
//             'Janji ditepati setelah 2 detik'
//         )
//     }, 2000)
// })
// console.log('mulai')
// // console.log(janji1.then(() => console.log(janji1)))
// // janji1.then(respon => console.log(respon)).finally(console.log('sedang menunggu janji'))
// console.log('selesai')

// Promise All
// const film = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('Film berhasil didapatkan')
//     }, 5000)
// })

// const musik = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('musik berhasil didapatkan')
//     }, 500)
// })

// Promise.all([film, musik])
//     // .then(respon => console.log(respon))
//     .then(respon => {
//         const [film, musik] = respon;
//         console.log(film)
//         console.log(musik)
//     })

// PENGGUNAAN PADA AJAX
const covid19 = fetch('https://data.covid19.go.id/public/api/kecamatan_rawan.json')
covid19
    .finally(console.log('Sedang Memproses Data'))
    .then(respon => respon.json())
    .then(respon => console.log(respon))
    .catch(respon => console.log('data tidak ditemukan \n' + respon))

















