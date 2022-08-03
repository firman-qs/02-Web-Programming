



const nama = 'Dawnbreaker'
const ultimate = 'Solar Gurdian'

const rangkai = function (str, ...exprs) {
    return str.reduce((result, current, i) => `${result}${current}${`<span class="hl">${exprs[i] || ''}</span>`}`, '')
}

const str = rangkai`Halo, nama saya ${nama}, ultimate saya adalah ${ultimate}. Terimakasih`
console.log(str)

document.body.innerHTML = str;








