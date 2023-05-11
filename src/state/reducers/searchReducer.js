import moviesList from "../../moviesList"

const searchReducer = (state = [], action) => {
    if (action.type === "SEARCH") {
        state = moviesList.filter((movie) => {
            return (movie.Year.toString() === action.payload || movie.Title.toLowerCase() === action.payload.toLowerCase());
        })
    }
    return state;
}

export default searchReducer;