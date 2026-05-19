import './style.css'

const movies = [
    {
        title: "Interstellar",
        year: 2014,
        rating: 8.8,
        image: "/src/assets/img/movies/interestelar.avif"
    },
    
    {
        title: "I am legend",
        year: 2007,
        rating: 7.2,
        image: "/src/assets/img/movies/iamlegend.jpg"
    },

    {
        title: "Titanic",
        year: 1997,
        rating: 8.1,
        image: "/src/assets/img/movies/titanic.webp"
    },

    {
        title: "Deadpool and Wolverine",
        year: 2024,
        rating: 7.5,
        image: "/src/assets/img/movies/deadpoolandwolverine.jpg"
    },

    {
        title: "World War Z",
        year: 2013,
        rating: 7.1,
        image: "/src/assets/img/movies/wwz.webp"
    },

    {
        title: "Avangers End Game",
        year: 2019,
        rating: 8.4,
        image: "/src/assets/img/movies/endgame.webp"
    }
]

const containerMovies = document.getElementById("containerMovies")

movies.forEach(movie => {

    containerMovies.innerHTML += `
    

    <article class="border rounded-2xl h-60 w-50">

        <div class="header h-full rounded-tl-2xl rounded-tr-2xl">
            <img src="${movie.image}" class="h-full border-0 rounded-tl-2xl rounded-tr-2xl">
        </div>

        <span class="p-1 w-15 mt-1 mr-1 text-center rounded-xl flex gap-2">
            <li class="star list-none text-sm"><i class="fa-solid fa-star"></i></li>
            <li class="list-none text-sm">${movie.rating}</li>
        </span>

        <div class="movieContent rounded-bl-2xl rounded-br-2xl pl-2">
                <h1 class="font-bold">${movie.title}</h1>
                <p>${movie.year}</p>
              </div>

    </article>
    
    `
})

const searchInput = document.getElementById("searchInput")
const searchBtn = document.getElementById("searchBtn")
const searched = document.getElementById("searched")

searchBtn.addEventListener("click", () => {
    let inputValue = searchInput.value
    
    const filterMovie = movies.filter(movie => {
        return movie.title.toLowerCase().includes(inputValue.toLowerCase())
    })

    console.log(filterMovie);

    containerMovies.innerHTML = ""
    
    filterMovie.forEach(movie => {
        containerMovies.innerHTML += `
        <article class="flex border rounded-2xl w-full h-full m-5">

            <div>
                <img src="${movie.image}" class="w-xl">
            </div>
            
        </article>
        
        `
    })
    
})