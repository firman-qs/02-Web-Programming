// "use strict";

var a = 1 // global variable

function fungsi() {
    // a = 3 // try turn-ON/OFF "use strict";
    var a = 2 //local variable
    console.log(a) // output ==> local variable
    console.log(window.a) // output ==> global variable
}

fungsi()
console.log(a) // output ==> global variable