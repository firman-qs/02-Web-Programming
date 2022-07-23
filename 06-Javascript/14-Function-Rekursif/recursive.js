// bilangan prima dengan return
function faktorial(x) {
    if (x > 0) {
        return x * faktorial(x - 1);
    }
    return 1;
}

console.log(faktorial(3));



// angka 10 9 8 7 ... 2 1
function turun(x) {
    if (x>0) {
        console.log(x)
        turun(x-1)
    }
}

turun(10)

