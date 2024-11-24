import React from "react";
import { useSelector } from "react-redux";
import MovieSection from "./MovieSection";
import MovieLoadingSimmer from "./MovieLoadingSimmer";
import Skeleton from "react-loading-skeleton";

function AiSearchMovies() {
  const aiMoviesData = useSelector((state) => state.gpt);
  const onSearch = useSelector((state) => state.gpt.onSearch);
  if (onSearch) {
    return (
      <>
        <div className="mx-3 my-3">
          <Skeleton width={200} height={20} />
          <MovieLoadingSimmer />
        </div>
      </>
    );
  }
  if (!aiMoviesData.movieResults) {
    return null;
  }
  const { movieResults } = aiMoviesData;
  const movieArr = movieResults.map((movie) => {
    if (movie.length !== 0) return movie[0];
  });
  console.log(movieArr)
  return (
    <div className="bg-black">
      <MovieSection title={"✨ai movie suggestions"} movies={movieArr} />
    </div>
  );
}

export default AiSearchMovies;
