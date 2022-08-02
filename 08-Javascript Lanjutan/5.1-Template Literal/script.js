// Template literal => "STRING LITERAL" yang memungkinkan adanya expression didalamnya
// menggunakan `back tick`

// KEGUNAAN
// 1. Multi-Line String
// console.log(`Baris 1
// Baris 2
// baris 3`)

// 2. HTML Fragments
document.body.innerHTML = `
<div class="card" style="width: 18rem;">
<div class="card-header">
    Featured
</div>
<ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
</ul>
</div>`

// 3. Embedded Expression, eg. ${}
// 4. Expression Interpolation, eg ${math operation}
// 5. Tagged Template, eg 
