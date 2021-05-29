import { useState, useRef, useEffect } from "react";
import TmdbSearchData from "../Data/TmdbSearchData";

export default function Search({ searchMovies }) {
  const [tmdbMovies, setTmdbMovies] = useState(TmdbSearchData);
  const searchBoxRef = useRef();
  const getMovieDataUrl =''

  useEffect(() => {
    
  }, [tmdbMovies]);

  function getMovieData(movie) {
    getMovieDataUrl = getMovieData(movie) + encodeURI(movie);
    return getMovieDataUrl;
  }

  return (
    <div className="container">
      <div className="col-sm-12">
        <input type="text" ref={searchBoxRef} />
        <button className="btn btn-primary">Search</button>
      </div>

      <div className="col-sm-12">
        <pre htmlFor="">
          {JSON.stringify(tmdbMovies)}</pre>  
      </div>
    </div>
  );
}
