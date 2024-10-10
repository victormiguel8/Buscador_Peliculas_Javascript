document.getElementById('searchButton').addEventListener('click', searchMovies)


let api_key = 'bf87ad64c7fe39033bb0f85fdfea4e74'
let urlBase = 'https://api.themoviedb.org/3/search/movie'
let urlImg = 'https://image.tmdb.org/t/p/w200'

let resultContainer = document.getElementById('results')

function searchMovies(){
    resultContainer.innerHTML = 'Cargando...'
    let searchInput = document.getElementById('searchInput').value

    fetch(`${urlBase}?api_key=${api_key}&query=${searchInput}`)
    .then(response => response.json())
    .then(response => displayMovies(response.results))
}

function displayMovies(movies){
    
    resultContainer.innerHTML = ''

    if(movies.length === 0){
        resultContainer.innerHTML = '<p> No se encontraron resultados para tu busqueda</p>'
        return
    }

    movies.forEach(movie =>  {
        let movieDiv = document.createElement('div')
        movieDiv.classList.add('movie')

        let title = document.createElement('h2')
        title.textContent = movie.title

        let language = document.createElement('p')
        language.textContent = movie.original_language

        if(language.textContent === 'en'){
            language.textContent = 'Ingles'
        }

        if(language.textContent === 'ja'){
            language.textContent = 'Japones'
        }

        if(language.textContent === 'ru'){
            language.textContent = 'Ruso'
        }

        let releaseDate = document.createElement('p')
        releaseDate.textContent = 'La fecha de lanzamiento fue: ' + movie.release_date

        let overview = document.createElement('p')
        overview.textContent = movie.overview

        let posterPath = urlImg + movie.poster_path
        let poster = document.createElement('img')
        poster.src = posterPath

        movieDiv.appendChild(poster)
        movieDiv.appendChild(title)
        movieDiv.appendChild(language)
        movieDiv.appendChild(releaseDate)
        movieDiv.appendChild(overview)

        resultContainer.appendChild(movieDiv)
    })
}