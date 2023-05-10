import React from 'react'
import MovieItem from '../movieItem/MovieItem'
import { useSelector } from 'react-redux'
import "./result.css"
const Result = () => {
    const moviesList=useSelector((state)=>state.search)
    return (
        <div className='result'>
            {
                moviesList.map((movie, index) => {
                    return <MovieItem key={index} title={movie.Title} year={movie.Year} poster={movie.Poster} production={movie.Production} />
                })
            }
        </div>)
}

export default Result
