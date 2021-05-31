import { React } from "react"
import MovieCard from "./MovieCard"

export default function MovieCards({ listOfMovies,addMovie }) {
  return listOfMovies.results.map((item) => {
      if(item.poster_path && item.adult === false) {
        return <MovieCard key={item.id} movieDetails={item}  addMovie={addMovie} />
      } return null
  })
}