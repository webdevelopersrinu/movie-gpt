import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import MovieDescription from "./MovieDescription";

function MovieBanner() {
  const movieData = useSelector((state) => state.moviePage.moviePageData);
  if (!movieData) return;
  return (
    <div className="  flex md:flex-row flex-col justify-between items-center ">
      <MovieCard moviesItem={movieData} />
      <MovieDescription movieInfo={movieData} />
    </div>
  );
}

export default MovieBanner;
