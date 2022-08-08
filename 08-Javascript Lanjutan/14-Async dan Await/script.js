/* Asynchronous funcition 
Sebuah function yang bekerja secara asynchronous (melalui event loop), yang menghasilkan (implisit) promise sebagai return value nya, tapi cara penulisan codenya menggunakan cara penulisan yang synchronous (standart)
*/

// contoh
function cobaPromise() {
    return new Promise((resolve, reject) => {
        const waktu = 3000;
        if (waktu < 5000) {
            setTimeout(() => {
                resolve('Selesai')
            }, waktu);
        } else {
            reject('Kelamaan');
        }
    });
}

const coba = cobaPromise();
coba
    .then(() => console.log(coba))
    .catch(() => console.log(coba))

