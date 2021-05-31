import { React } from "react";
import MovieCard from "./MovieCard";

export default function MovieCards({ listOfMovies,addMovie }) {
  return listOfMovies.results.map((item) => {
      if(item.poster_path) {
        return <MovieCard key={item.id} movieDetails={item}  addMovie={addMovie} />
      }
  });
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
