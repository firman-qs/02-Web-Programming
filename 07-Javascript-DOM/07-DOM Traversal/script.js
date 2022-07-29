const btnClose = document.querySelectorAll('.close');
const card = document.querySelectorAll('.card');

btnClose.forEach(function (element) {
    element.addEventListener('click', () => {
        element.parentElement.style.display = 'none'; //telusuri Element
    })
});

// for (let i = 0; i < card.length; i++) {
//     btnClose[i].addEventListener('click', (e) => {
//         // btnClose[i].parentElement.style.display = 'none';
//         e.target.parentElement.style.display = 'none';
//     })
// };