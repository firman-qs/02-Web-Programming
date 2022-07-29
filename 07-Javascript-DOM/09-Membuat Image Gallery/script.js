const thumbnails = document.querySelector('.thumbnails');
thumbnails.addEventListener('click', function (e) {
    if (e.target.className == 'thumb') {
        const jumbo = document.querySelector('.jumbo');
        const thumbs = document.querySelectorAll('.thumb');
        jumbo.src = e.target.src

        jumbo.classList.add('animasiFade')
        setInterval(() => {
            jumbo.classList.remove('animasiFade')
        }, 501);

        thumbs.forEach(function (thumb) {
            thumb.classList.remove('active')
        })
        
        e.target.classList.add('active')
    }
})


