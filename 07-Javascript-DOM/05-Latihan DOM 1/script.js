// Tombol Ubah Warna
const tUbahWarna = document.getElementById('tUbahWarna');


tUbahWarna.addEventListener('click', () => {
    document.body.classList.toggle('biruMuda');
})


// Tombol Warna Random
const tRandomColor = document.createElement('button');
const txtRandomColor = document.createTextNode('Warna Random');
tRandomColor.appendChild(txtRandomColor);
tRandomColor.setAttribute('type', 'button')

tUbahWarna.after(tRandomColor)

tRandomColor.addEventListener('click', () => {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
})



// slider
const sMerah = document.querySelector('input[name=sMerah]');
// const sHijau = document.querySelector('input[name=sHijau]');
// const sBiru = document.querySelector('input[name=sBiru]');
const sliderWarna = document.querySelector('#sliderWarna');
sliderWarna.addEventListener('input', () => {
    const r = sMerah.value;
    const g = document.querySelector('input[name=sHijau]').value;
    const b = (document.querySelector('input[name=sBiru]')).value;
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
})


// cursor move background color
document.body.addEventListener('mousemove', (event) => {
    // posisi mouse
    const xPos = Math.round((event.clientX / window.innerHeight)*255);
    const yPos = Math.round((event.clientY / window.innerHeight)*255);
    console.log(yPos)
    console.log(xPos)
    document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +',100)';
})