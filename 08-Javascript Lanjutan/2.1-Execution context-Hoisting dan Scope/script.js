// 2.1 Execution context, Hoisting dan Scope

/* Creation phase pada Global context
menggunakan konsep hoisting (seperti mengerek bendera keatas)
1.  Javascript mengecek apakah ada keyword function & variable 
    jika ada
2.  variabel akan diisi dengan 'undifined'
3.  function akan diisi dengan 'fn()' atau isi dari function itu sendiri
    contoh (coba balik urutan dan lihat hasil pada console) 
4.  Js mendefinisikan "window" sebagai Global object dan "this" = "window"
*/

console.log(nama);
var nama = 'Keeper of the Light'


// function membuat Local Context Creation, konsepnya dengan Global Context




