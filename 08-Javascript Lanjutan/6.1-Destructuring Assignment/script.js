// Destructuring array

// const perkenalan = ['Dawnbreaker', 'Strengt', 'Solar Guardian', 560]

// Multiple Assignment
// const [hero, attribute, ss, startHp] = perkenalan;
// console.log(ss);

// skipping assignment
// const [hero, , ss,] = perkenalan;
// console.log(ss);

// swap item
// manual
// let a = 9;
// let b = 3;
// let temp = a;
// a = b;
// b = temp;
// console.log(a)
// console.log(b)
// Swap dengan Destructuring Assignmetn
// [a, b] = [b, a];

// // return value pada function
// const kuadratDanAkar = function (a, b) {
//     return [a ** b, Math.sqrt(a)]
// }

// const [kuadrat, akar] = kuadratDanAkar(9, 2)
// console.log(`9 di kuadrat = ${kuadrat}, diakar =  ${akar}`)

// Rest Parameter
// const [a,b, ...c] = [1,2,3,4,5,6,7,8,9]
// console.log(a)
// console.log(b)
// console.log(c)


// Destructuring Object
// const heroDota = {
//     id: 1812,
//     nama: "Treant Protector",
//     attr: "intellegence",
//     startHp: 580
// }

// const { id, startHp, nama } = heroDota;
// console.log(nama)

// tanpa deklarasi object
// ({ id, startHp, nama } = {id: 1812,nama: "Treant Protector", attr: "intellegence",startHp: 580});
// console.log(nama)

// assign ke variable baru
// const heroDota = {
//     id: 1812,
//     namaDariHeroIniAdalah: "Treant Protector",
//     attribute: "intellegence",
//     startHp: 580
// }

// const { id, startHp, namaDariHeroIniAdalah:a } = heroDota;
// console.log(a)

// beri nilai argumen default
// const heroDota = {
//     id: 1812,
//     nama: "Treant Protector",
//     attr: "intellegence",
//     startHp: 580
// }

// const { id, startHp, nama, gold=600} = heroDota;
// console.log(gold)

// nilai default & variable baru
// const heroDota = {
//     id: 1812,
//     nama: "Treant Protector",
//     attr: "intellegence",
//     startHp: 580
// }

// const { id, startHp, nama, gold: g = 600 } = heroDota;
// console.log(g)

// rest parameter
// const heroDota = {
//     id: 1812,
//     nama: "Treant Protector",
//     attr: "intellegence",
//     startHp: 580,
//     startMana: 300
// }

// const { nama, startMana, ...values } = heroDota;
// console.log(id)
// console.log(value)

// ambil field pada object, setelah dikirim sebagai parameter function
// const heroDota = {
//     id: 1812,
//     nama: "Ucup",
//     attr: "intellegence",
//     startHp: 580,
//     startMana: 300
// }

// const sayHello = function ({nama}) {
//     return `Hallo, Selamat Pagi ${nama}`
// }

// console.log( sayHello(heroDota) )


