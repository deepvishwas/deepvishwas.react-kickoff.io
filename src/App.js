import React, { useState, useRef, useEffect } from "react";
import MovieList from "./MovieList";
import dataSet from "./Data/DataSet";
import Search from "./SearchComponent/Search";

function App() {
  const [movies, setMovies] = useState(dataSet);
  const nameRef = useRef();

  function toggleStatus(id) {
    const newMovies = [...movies.results];
    const newMovie = newMovies.find((m) => m.id === id);
    newMovie.status = !newMovie.status;
    setMovies(newMovies);
  }

  function addMovie(movie) {
    if (!movie) return;

    setMovies((prevMovies) => {
      return [
        ...prevMovies,
        {
          id: movie.id,
          original_title: movie.original_title,
          status: false,
        },
      ];
    });
  }

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Movie List
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid g-5">
        <div className="row flex-lg-row justify-content-center">
          <div className="col-sm-12">
            <h1 className="display-5 fw-bold lh-1 mb-3">Learn React</h1>
            <p className="lead">
              Let's start with a simple movie list app and then follow the
              Friend project.
            </p>
          </div>
          <div className="col-sm-6 align-items-center">
            <MovieList movies={movies} toggleStatus={toggleStatus} />
          </div>
          <div className="col-sm-6 align-items-center">
            <Search addMovie={addMovie} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
