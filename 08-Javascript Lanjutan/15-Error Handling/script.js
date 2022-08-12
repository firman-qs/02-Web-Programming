$('.row .col form button').on('click', async function () {
    try {
        const film = await getMovies($('.input-keyword').val());
        updateFilm(film);
    } catch (error) {
        $('.insider').html(error)
        // console.log(error)
    }
    $('.modal-detail-button').on('click', async function () {
        try {
            const details = await getDetails($(this).data('imdbid'));
            updateDetails(details);
        } catch (error) {
            $('.modal-body').html(error);
        }
    })
})

// function
function getMovies(keyword) {
    return fetch(`http://www.omdbapi.com/?apikey=dca61bcc&s=${keyword}`)
        .then(element => {
            if (!element.ok) {
                throw new Error(`Something went wrong, ${element.statusText}`)
            }
            return element.json()
        })
        .then(element => {
            // console.log(element)
            if (element.Response === 'False') {
                throw new Error(`Something went wrong, ${element.Error}`)
            }
            return element.Search
        })
}

function updateFilm(movies) {
    let cards = ''
    movies.forEach(e => cards += showCard(e))
    $('.movie-container').html(cards);
}

function getDetails(keyDetails) {
    return fetch(`http://www.omdbapi.com/?apikey=dca61bcc&i=${keyDetails}`)
        .then(result => {
            if (!result.ok) {
                throw new Error(result.statusText)
            }
            return result.json()
        })
        .then(result => {
            if (result.Response === "False") {
                throw new Error(result.Error)
            }
            return result
        })
}
function updateDetails(result) {
    $('.modal-title').html(result.Genre);
    $('.modal-body .title').html(`<h4>${result.Title}</h4>`);
    $('.modal-body .plot').html(`<h6>Plot:</h6>${result.Plot}`);
    $('.modal-body .director').html(`<h6>Director:</h6>${result.Director}`);
    $('.modal-body .writer').html(`<h6>Writer:</h6>${result.Writer}`);
    $('.modal-body .actors').html(`<h6>Actor:</h6>${result.Actors}`);
    $('.modal-body .released').html(`<h6>Released:</h6>${result.Released}`);
    $('.img-thumbnail').attr("src", `${result.Poster}`);
}
function showCard(e) {
    return `<div class="col-md-3 my-3">
        <div class="card h-100">
            <img src="${e.Poster}" class="card-img-top h-100">
            <div class="card-body h-100">
                <h6 class="mb-3 card-title">${e.Title}</h6>
                <h6 class="mb-3 card-subtitle mb-2 text-muted"><small><strong>Released :</strong> ${e.Year}</small></h6>
                <a href="${e.Poster}" class="mb-1 btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-imdbid ="${e.imdbID}"><small>show details</small></a>
            </div>
        </div>
    </div>`;
}

