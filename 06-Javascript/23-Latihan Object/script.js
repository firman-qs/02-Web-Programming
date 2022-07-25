function Angkot(sopir, trayek, penumpang, kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    
    this.penumpangNaik = function (namaPenumpang) {
        if (!this.penumpang.includes(namaPenumpang)) {
            for (var x of this.penumpang) {
                if (x == undefined) {
                    var i = this.penumpang.indexOf(x)
                    this.penumpang[i] = namaPenumpang;
                    return this.penumpang;
                }
            }
            this.penumpang.push(namaPenumpang)
            return this.penumpang;
        }
        return console.log('Penumpang ini sudah ada')
    }

    this.penumpangTurun = function (namaPenumpang, bayar) {
        if (this.penumpang.length == 0) {
            console.log('Penumpang kosong')
            return false;
        } else {
            if (this.penumpang.includes(namaPenumpang)) {
                for (var x of this.penumpang) {
                    if (x == namaPenumpang) {
                        var i = this.penumpang.indexOf(namaPenumpang)
                        this.penumpang[i] = undefined
                    }
                }
                this.kas += bayar;
                return this.penumpang;
            }
            return console.log('Penumpang ini gaada bang');
        }
    }
}


var angkot1 = new Angkot('Beastmaster', ['Triwung', 'Pilang'], [], 0);
var angkot2 = new Angkot('Hoodwink', ['Jati', 'Citarum'], [], 0);