import React, { useState } from "react";
import dataSet from "./Data/DataSet";
import MovieList from "./MovieList";
import Search from "./SearchComponent/Search";
import toastr from "toastr";
import "toastr/build/toastr.css";
import html2pdf from "html2pdf.js";

function App() {
  toastr.options = {
    closeButton: true,
    debug: false,
    newestOnTop: false,
    progressBar: false,
    positionClass: "toast-top-right",
    preventDuplicates: false,
    onclick: null,
    showDuration: "150",
    hideDuration: "500",
    timeOut: "1500",
    extendedTimeOut: "100",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
  };

  const [watchList, setWatchList] = useState(dataSet);

  function toggleStatus(id) {
    let newWatchList = { results: [] };
    newWatchList.results = [...watchList.results];
    const newMovie = newWatchList.results.find((m) => m.id === id);
    newMovie.status = !newMovie.status;
    setWatchList(newWatchList);
  }

  function isListed(movie) {
    if (watchList.results.find((m) => m.id === movie.id)) {
      return true;
    }
    return false;
  }

  function addMovie(movie) {
    if (!isListed(movie)) {
      const newWatcherList = { results: [] };
      newWatcherList.results = [
        ...watchList.results,
        {
          ...movie,
          status: false,
        },
      ];
      setWatchList(newWatcherList);
      toastr.success(movie.name + "has been added to your Watch List");
    }
  }

  function converToPDF() {
    let ele = document.getElementById("my-watch-list");
    let worker = html2pdf().from(ele).save();
  }
  return (
    <div className="mb-5">
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-eyeglasses"
              viewBox="0 0 16 16"
            >
              <path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
            </svg>
            <h3 className="p-2">WATCHMEN</h3>
          </a>
          <button className="btn btn-primary float-end" onClick={converToPDF}>
            Share PDF
          </button>
        </div>
      </nav>

      <div className="container-fluid g-5 mb-5">
        <div className="row flex-lg-row justify-content-center mt-5 pt-5">
          <div className="col-sm-8 align-items-center">
            <Search addMovie={addMovie} watchList={watchList} />
          </div>
          <div className="col-sm-3 align-items-center pt-3" id="my-watch-list">
            <MovieList
              className="float-end"
              watchList={watchList}
              toggleStatus={toggleStatus}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
