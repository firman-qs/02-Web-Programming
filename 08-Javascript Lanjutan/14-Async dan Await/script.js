/* Asynchronous funcition 
Sebuah function yang bekerja secara asynchronous (melalui event loop), yang menghasilkan (implisit) promise sebagai return value nya, tapi cara penulisan codenya menggunakan cara penulisan yang synchronous (standart)
*/

// contoh
function cobaPromise() {
    return new Promise((resolve, reject) => {
        const waktu = 5000;
        if (waktu < 5000) {
            setTimeout(() => {
                resolve('Promis Dijalankan')
            }, waktu);
        } else {
            reject('Kelamaan');
        }
    });
}

async function getPromise() {
    try {
        const coba = await cobaPromise();
        console.log(coba);
    } catch (err) {
        console.log(err);
    }
}

console.log('====== Mulai ======')
getPromise()
console.log('====== Selesai ======')



