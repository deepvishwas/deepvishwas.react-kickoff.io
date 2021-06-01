import React from "react"
import Movie from "./Movie"

export default function WatchList({ watchList, toggleStatus }) {
  if (watchList) {
    return watchList.results.map((movie, index) => {
      return (
        <Movie key={index} movie={movie} toggleStatus={toggleStatus}></Movie>
      )
    })
  }
}
