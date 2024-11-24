import React from "react";
import { useSelector } from "react-redux";
import MovieSection from "./MovieSection";

function SimilarMovies() {
  const similarMovies = useSelector((state) => state.moviePage.similarMovies);
  if (!similarMovies) return;

  return (
    <div>
      {similarMovies.length > 0 && (
        <MovieSection title={"Similar Movies"} movies={similarMovies} />
      )}
    </div>
  );
}

export default SimilarMovies;
