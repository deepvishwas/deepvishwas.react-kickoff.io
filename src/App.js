import React, { useState } from "react"
import dataSet from "./Data/DataSet"
import MovieList from "./MovieList"
import Search from "./SearchComponent/Search"

function App() {
  const [watchList, setWatchList] = useState(dataSet)

  function toggleStatus(id) {
    let newWatchList = { results: [] }
    newWatchList.results = [...watchList.results]
    const newMovie = newWatchList.results.find((m) => m.id === id)
    newMovie.status = !newMovie.status
    setWatchList(newWatchList)
  }

  function addMovie(movie) {
    try {
      // to be converted into types or API contracts
      const newWatcherList = { results: [] }
      newWatcherList.results = [
        ...watchList.results,
        {
          ...movie,
          status: false,
        },
      ]
      setWatchList(newWatcherList)
    } catch (error) {
      console.log("oopsi doopsi")
    }
  }

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <i className="bi-snow2 p-2"></i>
            <h3>Let's React</h3>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse hide" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Movie List
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid g-5">
        <div className="row flex-lg-row justify-content-center mt-5 pt-5">
          
          <div className="col-sm-8 align-items-center">
            <Search addMovie={addMovie} />
          </div>
          <div className="col-sm-3 align-items-center">
            <MovieList watchList={watchList} toggleStatus={toggleStatus} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
