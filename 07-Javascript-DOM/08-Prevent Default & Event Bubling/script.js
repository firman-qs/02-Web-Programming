const btnClose = document.querySelectorAll('.close');
const card = document.querySelector('.card');

// btnClose.forEach(function (element) {
//     element.addEventListener('click', (event) => {
//         console.log(event.target)
//         event.target.parentElement.style.display = 'none'; //telusuri Element
//         event.preventDefault(); // mencegah perilaku tag <a> yang secara default melakukan refresh
//         event.stopPropagation(); // Mencegah event bubbling
//     })
// });


// for (let i = 0; i < card.length; i++) {
//     btnClose[i].addEventListener('click', (e) => {
//         // btnClose[i].parentElement.style.display = 'none';
//         e.target.parentElement.style.display = 'none';
//     })
// };

// const container = document.querySelector('.container');
// container.addEventListener('click', function(){
//     alert('Container di Klik')
// })

const container = document.querySelector('.container');

container.addEventListener('click', function (event) {
    event.target.parentElement.style.display = 'none'; //telusuri Element
})


