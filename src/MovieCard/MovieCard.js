import { React } from "react";

export default function MovieCard({ movieDetails, addMovie }) {
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
        <div className="card-body">
          {/* <p className="card-text">{movieDetails.overview}</p> */}
        </div>
        <div className="card-footer ">
          <h5 className="card-title"> {movieDetails.original_title}</h5>
          <div className="row">
            <div className="col-sm-6">
              <button
                className="btn btn-sm btn-outline-success border-0 m-2"
                onClick={addToWatchList}
              >
                <i class="bi bi-check-circle"></i>
              </button>
            </div>
            <div className="col-sm-6">
              <button
                className="btn btn-sm btn-outline-success m-2"
                onClick={addToWatchList}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/*


{
      adult: false,
      backdrop_path: "/ww1eIoywghjoMzRLRIcbJLuKnJH.jpg",
      genre_ids: [28],
      id: 343611,
      original_language: "en",
      original_title: "Jack Reacher: Never Go Back",
      overview:
        "Jack Reacher must uncover the truth behind a major government conspiracy in order to clear his name. On the run as a fugitive from the law, Reacher uncovers a potential secret from his past that could change his life forever.",
      popularity: 27.853,
      poster_path: "/wxLUQ1pIms3HAlVGYvEG9zg2kDs.jpg",
      release_date: "2016-10-19",
      title: "Jack Reacher: Never Go Back",
      video: false,
      vote_average: 5.8,
      vote_count: 3594,
    },
*/
