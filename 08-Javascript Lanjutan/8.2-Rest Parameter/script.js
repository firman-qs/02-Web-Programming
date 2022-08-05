// Rest Paramater
// Merepresentasikan argumen pada function dengan jumlah yang tdk terbatas menjadi sebuah array

const myFunct = function (a, ...restArgs) {
    return `nilai a = ${a}, nilai b = ${restArgs}`
    // return arguments // bukan array, tapi array-like
}
console.log(myFunct(1, 2, 3, 4, 5, 6))


const jumlahkan = function (...allArgs) {
    return allArgs.reduce((a, b) => a + b)
// const jumlahkan = function () {
    // return Array.from(arguments).reduce((a, b) => a + b)
    // return [...arguments].reduce((a, b) => a + b)
}

console.log(jumlahkan(1,2,3,4,5))

