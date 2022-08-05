// http://latentflip.com/loupe/
// console.log('satu');
// setTimeout(function () {
//     console.log('dua');
// }, -1)
// console.log('tiga');

$.on('button', 'click', function onClick() {
    setTimeout(function timer() {
        console.log('You clicked the button!');    
    }, 2000);
});

console.log("Hi!");

setTimeout(function timeout() {
    console.log("Click the button!");
}, 5000);

console.log("Welcome to loupe.");