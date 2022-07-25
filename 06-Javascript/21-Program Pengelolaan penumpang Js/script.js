var penumpang = [undefined, undefined];


var tambahPenumpang = function (namaPenumpang, arr) {
    // check apakah nama belum ada
    if (!arr.includes(namaPenumpang)) {
        // jika ada kursi kosong
        for (element of arr) {
            if (element == undefined) {
                arr[arr.indexOf(element)] = namaPenumpang
                return arr
            }
        }
        // jika tidak ada kursi kosong
        arr.push(namaPenumpang)
        return arr
    }
    // tampilkan penumpah yang sudah ada
    return `Penumpang dengan nama ${namaPenumpang} sudah ada`
}


var hapusPenumpang = function (namaPenumpang, arr) {
    // check apakah nama penumpang sudah ada
    if (arr.includes(namaPenumpang)) {
        for (element of arr) {
            if (element == namaPenumpang) {
                arr[arr.indexOf(element)] = undefined
                return arr
            }
        }
    } else if (arr = []) {
        return 'Angkot kosong'
    }
    return `Penumpang dengan nama ${namaPenumpang} tidak ada di angkot`
}



// var kosong = false
// var ikosong

// var tambahPenumpang = function (namaPenumpang, penumpang) {
//     var kursi = penumpang.find(function (e) {
//         if (e == undefined) {
//             kosong = true
//             return e == undefined
//         } else {
//             kosong = false
//         }
//     })
//     ikosong = penumpang.indexOf(kursi)

//     for (var i = 0; i < penumpang.length; i++) {
//         if (penumpang[i] == namaPenumpang) {
//             console.log("Penumpang sudah ada")
//             break;
//         } else {
//             if (kosong == true) {
//                 penumpang[ikosong] = namaPenumpang;
//                 return penumpang;
//             } else if (kosong == false) {
//                 penumpang.push(namaPenumpang);
//                 return penumpang;
//             }
//         }
//     }
// }


// // var penumpang = ['Ando', undefined, 'Loli'];

// // var tambahPenumpang = function (nama, arr) {
// //     if (arr.length == 0) {
// //         arr.push(nama);
// //         return arr;
// //     }
// //     else {
// //         var checkPenumpang = arr.find(function (e) {
// //             return e == nama
// //         })
// //         var ambilIndexPenumpang = arr.findIndex(function (e) {
// //             return e == undefined;
// //         })

// //         if (checkPenumpang === nama) {
// //             console.log(nama + ' sudah ada didalam angkot')
// //             return arr;
// //         }
// //         else if (ambilIndexPenumpang < 0 && checkPenumpang == undefined) {
// //             arr.push(nama);
// //             return arr;
// //         }
// //         else if (checkPenumpang == undefined && penumpang.length > 0) {
// //             arr[ambilIndexPenumpang] = nama;
// //             return arr;
// //         }
// //     }
// // }


// function tambahPenumpang(nama, array) {
//     // cek apakah tidak ada kesamaan nama
//     if (!array.includes(nama)) {
//         // cek apakah ada slot kosong ditengah
//         for (element of array) {
//             if (element == undefined) {
//                 let i = array.indexOf(element);
//                 array[i] = nama;
//                 return "Penumpang " + nama + " telah naik di kursi ke " + (i + 1);
//             }
//         }
//         // masukkan data penumpang
//         array.push(nama);
//         return "Penumpang " + nama + " berhasil naik di kursi " + (array.indexOf(nama) + 1);
//     }
//     // beri pesan data penumpang sudah ada
//     return "Penumpang " + nama + " dah ada di angkot";
// }