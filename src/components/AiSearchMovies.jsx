import React from "react";
import { useSelector } from "react-redux";
import MovieSection from "./MovieSection";

function AiSearchMovies() {
  const aiMoviesData = useSelector((state) => state.gpt);
  if (!aiMoviesData.movieResults) {
    return null;
  }
  const {  movieResults } = aiMoviesData;
  const data = movieResults.flat();
  return (
    <div className="bg-black">
      <MovieSection title={"✨ai movie suggestions"} movies={data} />
    </div>
  );
}

export default AiSearchMovies;
