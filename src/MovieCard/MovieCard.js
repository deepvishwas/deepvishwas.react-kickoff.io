import React, { useRef } from "react";


export default function MovieCard({
  movieDetails,
  addMovie,
}) {

  function addToWatchList(movie) {
    addMovie(movieDetails);
  }

  return (
    <div className="col-md-4">
      <div className="search-movie-card card p-1">
        <img
          src={
            "http://image.tmdb.org/t/p/w500/t/p/w500" + movieDetails.poster_path
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-footer ">
          <div className="row">
            <div className="col-sm-12">
            <h5 className="card-name"> {movieDetails.original_title}</h5> 
              <button
                className="btn btn-sm btn-outline-danger border-1 float-end"
                onClick={addToWatchList}
              >
                <i className="bi bi-heart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
