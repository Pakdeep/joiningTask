import moviesList from "../../moviesList"
const initState = moviesList;
const searchReducer = (searchMovie = initState, action) => {
    let x;
    let movies = [];
    
    console.log(searchMovie)
    if (action.type === "SEARCH") {
        x = action.payload;
        console.log(x)
        movies = searchMovie.filter((movie) => {
            return (movie.Year === 2019);
        })
        console.log(movies)
    }
    return movies;

}

export default searchReducer;