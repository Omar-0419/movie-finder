import './style.css'
/**
 * @typedef {Object} Movie
 * @property {string} title 
 * @property {number} year
 * @property {number} rating
 * @property {string} image
 * @property {string} description
 * @property {string} director
 */
/**@type {Array<Movie>} */
const movies = [
    {
        title: "Interstellar",
        year: 2014,
        rating: 8.8,
        image: "/src/assets/img/movies/interestelar.avif",
        category: "Sci-Fi, Drama, Adventure",
        description: "Interstellar is a 2014 British-American-Canadian epic science fiction drama film directed by Christopher Nolan and starring Matthew McConaughey, Anne Hathaway, Jessica Chastain, Michael Caine, and Matt Damon. Set in a dystopian future where humanity is struggling to survive as Earth becomes uninhabitable due to devastating climate change, the film tells the story of a group of astronauts who travel through a wormhole near Saturn in search of a new home for humankind.",
        director: "Christopher Nolan"
    },
    
    {
        title: "I am legend",
        year: 2007,
        rating: 7.2,
        image: "/src/assets/img/movies/iamlegend.jpg",
        category: "Sci-Fi, Horror, Thriller, and Drama",
        description: "I Am Legend is a 2007 American post-apocalyptic action thriller film directed by Francis Lawrence from a screenplay by Akiva Goldsman and Mark Protosevich and starring Will Smith as U.S. Army virologist Robert Neville. Loosely based on the 1954 novel of the same name by Richard Matheson, the film is set in New York City after a virus, which was originally created to cure cancer, has wiped out most of mankind, leaving Neville as the last human in New York City, other than nocturnal mutants. Immune to the virus, Neville works to develop a cure while defending himself against the hostile mutants. It is the third feature-film adaptation of Matheson's novel following 1964's The Last Man on Earth and 1971's The Omega Man.",
        director: "Francis Lawrence"
    },

    {
        title: "Titanic",
        year: 1997,
        rating: 8.1,
        image: "/src/assets/img/movies/titanic.webp",
        category: "Drama, Romance",
        description: "Titanic is a 1997 American epic historical romance film written and directed by James Cameron. Incorporating both historical and fictional aspects, it is based on accounts of the sinking of RMS Titanic in 1912. Leonardo DiCaprio and Kate Winslet star as members of different social classes who fall in love during the ship's ill-fated maiden voyage. The ensemble cast includes Billy Zane, Kathy Bates, Frances Fisher, Bernard Hill, Jonathan Hyde, Danny Nucci, David Warner and Bill Paxton.",
        director: "James Cameron"
    },

    {
        title: "Deadpool and Wolverine",
        year: 2024,
        rating: 7.5,
        image: "/src/assets/img/movies/deadpoolandwolverine.jpg",
        category: "Action, Comedy, and Sci-Fi",
        description: "Deadpool & Wolverine is a 2024 American superhero film based on Marvel Comics featuring the characters Deadpool and Wolverine. Produced by Marvel Studios, Maximum Effort, and 21 Laps Entertainment, and distributed by Walt Disney Studios Motion Pictures, it is the 34th film in the Marvel Cinematic Universe (MCU) and the sequel to Deadpool (2016) and Deadpool 2 (2018). The film was directed by Shawn Levy from a screenplay he wrote with Ryan Reynolds, Rhett Reese, Paul Wernick, and Zeb Wells. Reynolds and Hugh Jackman respectively star as Wade Wilson / Deadpool and Logan / Wolverine, alongside Emma Corrin, Morena Baccarin, Rob Delaney, Leslie Uggams, Aaron Stanford, and Matthew Macfadyen.",
        director: "Shawn Levy"
    },

    {
        title: "World War Z",
        year: 2013,
        rating: 7.1,
        image: "/src/assets/img/movies/wwz.webp",
        category: "Action, Horror, and Thriller",
        description: "World War Z is a 2013 American action horror film starring Brad Pitt as Gerry Lane, a former United Nations investigator who travels the world seeking a solution for a sudden zombie apocalypse. Inspired by the 2006 novel by Max Brooks, the film was directed by Marc Forster, with a screenplay by Matthew Michael Carnahan, Drew Goddard, and Damon Lindelof, from a story by Carnahan and J. Michael Straczynski. The supporting cast includes Mireille Enos, James Badge Dale, and Matthew Fox.",
        director: "Marc Forster"
    },

    {
        title: "Avangers End Game",
        year: 2019,
        rating: 8.4,
        image: "/src/assets/img/movies/endgame.webp",
        category: "Superheroes, Sci-Fi, Action and Adventure.",
        description: "Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the direct sequel to Avengers: Infinity War (2018) and the 22nd film in the Marvel Cinematic Universe (MCU). Directed by Anthony and Joe Russo and written by Christopher Markus and Stephen McFeely, the film features an ensemble cast that includes Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, Jeremy Renner, Don Cheadle, Paul Rudd, Brie Larson, Karen Gillan, Danai Gurira, Benedict Wong, Jon Favreau, Bradley Cooper, Gwyneth Paltrow, and Josh Brolin. ",
        director: "Anthony & Joe Russo"
    }
]

const containerMovies = document.getElementById("containerMovies")

movies.forEach(movie => {

    containerMovies.innerHTML += `
    

    <article id="movies" class="border rounded-2xl h-60 w-50">

        <div class="header h-full rounded-tl-2xl rounded-tr-2xl">
            <img src="${movie.image}" class="h-full object-cover border-0 rounded-tl-2xl rounded-tr-2xl">
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
// const searched = document.getElementById("searched")
// const listPopular = document.getElementById("listPopular")
// let changePtext = listPopular.innerHTML

searchBtn.addEventListener("click", () => {
    let inputValue = searchInput.value
    
    
    const filterMovie = movies.filter(movie => {
        return movie.title.toLowerCase().includes(inputValue.toLowerCase())
    })

    console.log(filterMovie);

    containerMovies.innerHTML = ""
    
    filterMovie.forEach(movie => {
        console.log(movie);
        
        containerMovies.innerHTML += `


        <div id="searched" class=" w-full p-3">

          <article id="searchedMovie" class="grid grid-cols-3 border rounded-2xl w-full h-full m-0 p-3">

            <div class="contentSearch flex w-full justify-center">
                <img src="${movie.image}" class="w-100 h-80 rounded-2xl">
            </div>

            <div class="flex flex-col justify-start p-3 pl-5">

              <h1 id="name" class="font-bold uppercase text-2xl">${movie.title}</h1> <br>

              <!-- <ul id="" class="flex text-amber-200 gap-30 pl-5">
                <li>${movie.rating}</li>
                <li class="listSearched">year</li>
                <li class="listSearched">category</li>
              </ul> -->

              <div id="dataMovie" class="grid grid-cols-3 text-amber-100">
                <p id="rating"><i class="fa-solid fa-star"></i> ${movie.rating}</p>
                <p class="yearC border-l-2 pl-5">${movie.year}</p>
                <p class="yearC border-l-2 pl-5">${movie.category}</p>
              </div>

              <div id="overview" class="border-t mt-3 pt-3">
                <h1 class="text-amber-200">Overview</h1>

                <p class="mt-3">${movie.description}</p>

                <div class="flex gap-2 items-center mt-3">
                  <h1 id="director">Director:</h1>
                  <h1 id="nameDirector">${movie.director}</h1>
                </div>
              </div>

            </div>

            <div class="flex flex-col items-center gap-6 pt-5">

              <button id="addFavorite" class="flex border p-3 rounded-full text-center"><i class="fa-regular fa-heart"></i></i></button>

              <table class="m-5 overflow-hidden rounded-2xl">
                <tr class="border-b-2">
                  <td><i class="fa-regular fa-calendar"></i></td>
                  <td>Release Date</td>
                  <td class="descriptionTable">date</td>
                </tr>
                <tr class="border-b-2">
                  <td><i class="fa-regular fa-clock"></i></td>
                  <td>Duration</td>
                  <td class="descriptionTable">time</td>
                </tr>
                <tr class="border-b-2">
                  <td><i class="fa-solid fa-clapperboard"></i></td>
                  <td>Language</td>
                  <td class="descriptionTable">Language</td>
                </tr>
                <tr class="">
                  <td><i class="fa-solid fa-globe"></i></td>
                  <td>Country</td>
                  <td class="descriptionTable">country</td>
                </tr>
              </table>


            </div>
            
        </article>



        </div>
        
        `
    })
    
})

const logo = document.getElementById("logo")

logo.addEventListener("click", () => location.reload())