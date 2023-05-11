import React from 'react'
import "./movies.css"
import MovieItem from '../movieItem/MovieItem'
import { useSelector } from 'react-redux'
const Movies = () => {
    const moviesList=useSelector((state)=>state.display)
    return (
        <div className='movies'>
            {
                moviesList.map((movie, index) => {
                    return (
                        <MovieItem key={index} title={movie.Title} year={movie.Year} poster={movie.Poster} production={movie.imdbRating} />
                    )
                })
            }

        </div>
    )
}

export default Movies
