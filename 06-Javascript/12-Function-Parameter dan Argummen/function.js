// function namaFungsi(Parameter/Argumen) {
//     Action
// }

function fungsiKuadrat() {
    var hasil = [], domain = [], didapat = [];
    for (var i = 0; i < arguments.length; i++) {
        hasil.push(arguments[i]**2);
        domain.push(arguments[i]);
    }
    didapat.push(domain,hasil);
    return didapat;
}

console.log(fungsiKuadrat(1,2,3,4,5));