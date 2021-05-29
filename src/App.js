import React, { useState, useRef, useEffect } from "react";
import MovieList from "./MovieList";
import dataSet from "./Data/DataSet";
import Search from './SearchComponent/Search';

function App() {
  const [movies, setMovies] = useState(dataSet);
  const nameRef = useRef();
  const LOCAL_MOVIES_KEY = "MoviesApp.movies";

  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem(LOCAL_MOVIES_KEY));
    if (storedMovies) setMovies(storedMovies);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_MOVIES_KEY, JSON.stringify(movies));
  }, [movies]);

  function toggleStatus(id) {
    const newMovies = [...movies];
    const newMovie = newMovies.find((m) => m.id === id);
    newMovie.status = !newMovie.status;
    setMovies(newMovies);
  }

  function clearCompleted(id) {
    const newMovies = [...movies];
    const toWatch = newMovies.filter((m) => !m.status);
    setMovies(toWatch);
  }

  function clearCache(id) {
    localStorage.clear(LOCAL_MOVIES_KEY);
  }

  function searchMovie(data){
    console.log(data)
  }

  function addMovie(movie) {
    if (nameRef.current.value === "") return;

    setMovies((prevMovies) => {
      return [
        ...prevMovies,
        {
          id: movies.length + 1,
          name: nameRef.current.value,
          status: false,
        },
      ];
      nameRef.current.value = null;
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

      <div>
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
            <Search searchMovie={searchMovie} />
          </div>
        </div>
      </div>

      <div className="row add-to-list p-2 m-0 flex-lg-row position-fixed bottom-0 justify-items-center">
        <div className="col col-sm-8 ">
          <input
            ref={nameRef}
            type="input"
            placeholder="Add movie to watch list"
          />

          <button
            className="btn btn-sm btn-outline-success m-2"
            onClick={addMovie}
          >
            Add
          </button>
          <button
            className="btn btn-sm btn-outline-danger m-2"
            onClick={clearCompleted}
          >
            Clear completed
          </button>
          <button
            className="btn btn-sm btn-outline-dark m-2"
            onClick={clearCache}
          >
            Clear cache
          </button>
          <label className="text-primary">
            {movies.filter((movie) => !movie.status).length} Left to watch
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
