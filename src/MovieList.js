import React from 'react'
import Movie from './Movie'

export default function MovieList({movies, toggleStatus}) {
    return (
        movies.map((movie, index) => {
            return <Movie key={index} movie={movie} toggleStatus={toggleStatus}></Movie>
        })
    )
}
