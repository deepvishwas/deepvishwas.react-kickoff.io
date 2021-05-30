import { useState, useRef, useEffect } from "react";
import TmdbSearchData from "../Data/TmdbSearchData";
import { pipe, observable } from "rxjs";

export default function Search({ searchMovies }) {
  const [tmdbMovies, setTmdbMovies] = useState(TmdbSearchData);
  const searchBoxRef = useRef();
  const [searchTerm, setSearchTerm] = useState("Jack");
  const BASE_URL =
    "https://api.themoviedb.org/3/search/movie?api_key=71b79b7219d155c0189a83511742186d&query=";

  useEffect(() => {
    fetch(searchTerm)
      .then((response) => response.json())
      .then((data) => {
        setTmdbMovies(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchTerm]);

  function getMovieUrl(e) {
    const search = searchBoxRef.current.value;
    if (search === "") return;
    const getMovieDataUrl = BASE_URL + encodeURI(search);
    setSearchTerm(getMovieDataUrl);
  }

  return (
    <div className="container">
      <div className="col-sm-12">
        <input type="text" ref={searchBoxRef} />
        <button className="btn btn-primary" onClick={getMovieUrl}>
          Search
        </button>
      </div>

      <div className="col-sm-12">
        <pre>{JSON.stringify(tmdbMovies)}</pre>
      </div>
    </div>
  );
}
