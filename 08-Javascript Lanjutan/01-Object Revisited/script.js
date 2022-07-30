function NewObject(nama,tinggi,umur) {
    this.name = nama;
    this.height = tinggi;
    this.age = umur;
}

const objek1 = new NewObject('firman',180,19)
const objek2 = new NewObject('qashdus',182,18)

console.log(objek1)
console.log(objek2)
console.log(objek2.age)
