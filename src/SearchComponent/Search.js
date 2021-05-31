import React from "react"
import { useState, useRef, useEffect } from "react"
import TmdbSearchData from "../Data/TmdbSearchData"
import MovieCards from "../MovieCard/MovieCards"

export default function Search({ addMovie }) {
  const [tmdbMovies, setTmdbMovies] = useState(TmdbSearchData)
  const searchBoxRef = useRef()
  const [searchTerm, setSearchTerm] = useState("")
  const BASE_URL =
    "https://api.themoviedb.org/3/search/movie?api_key=71b79b7219d155c0189a83511742186d&query="

  useEffect(() => {
    fetch(searchTerm)
      .then((response) => response.json())
      .then((data) => {
        setTmdbMovies(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [searchTerm])

  function getMovieUrl(e) {
    const search = searchBoxRef.current.value
    if (search === "") return
    const getMovieDataUrl = BASE_URL + encodeURI(search)
    setSearchTerm(getMovieDataUrl)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 m-2 p-2">
          <div className="input-group mb-3">
            <input
              type="text"
              ref={searchBoxRef}
              className="form-control"
              placeholder="Search Movies"
              aria-label="Search Movies"
              aria-describedby="movie-search"
            />
            <button
              className="btn btn-outline-secondary"
              onClick={getMovieUrl}
              type="button"
              id="movie-search"
            >
              <i class="bi bi-search"></i>
            </button>
          </div>
        </div>

        <div className="col-sm-12">
          <pre>{JSON.stringify(tmdbMovies)}</pre>
        </div>
      </div>

      <div className="row g-4">
        <MovieCards listOfMovies={tmdbMovies} addMovie={addMovie} />
      </div>
    </div>
  )
}
