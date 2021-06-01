import { React } from "react"
import MovieCard from "./MovieCard"

export default function MovieCards({ listOfMovies, addMovie, watchList }) {

  function isOnTheList(mov){
    return (watchList.results.find((item)=> item.id === mov.id))
  }

  return listOfMovies.results.map((item) => {
      if(item.poster_path && item.adult === false && !isOnTheList(item)) {
        return <MovieCard key={item.id} movieDetails={item}  addMovie={addMovie} />
      } return null
  })
}