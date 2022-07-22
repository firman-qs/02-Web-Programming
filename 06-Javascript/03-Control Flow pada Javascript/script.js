alert("Mulai");

var pilihan = true;
while (pilihan) {
	for (var x = 0; x <= 1; x++) {
		alert("Hello World");
	}

	pilihan = confirm("Pilih status ok/cancle");
}

// ada lagi menggunakan
alert("Program 1 Selesai");

alert("Program bilangan genap");

var angka = 0;
for (var x = 2; x <= 10; x++) {
	if (x % 2 === 0) {
		var angka = `${angka}, ${x}`;
	}
}

alert(`Angka genap = ${angka}`);
