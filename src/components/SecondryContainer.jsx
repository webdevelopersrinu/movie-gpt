import React from "react";
import MovieSection from "./MovieSection";
import { useSelector } from "react-redux";
import MovieLoadingSimmer from "./MovieLoadingSimmer";

function SecondryContainer() {
  const moviesList = useSelector((state) => state.movie);
  if (!moviesList.newPlayingMovies)
    return (
      <>
        <MovieLoadingSimmer />
        <MovieLoadingSimmer />
    
      </>
    );
  return (
    <div className="bg-black">
      <MovieSection
        title={"new playing movies"}
        movies={moviesList.newPlayingMovies}
      />
      <MovieSection
        title={"Top Rated Movies"}
        movies={moviesList.topRatedMovies}
      />
      <MovieSection
        title={"Popular Movies"}
        movies={moviesList.popularMovies}
      />
      <MovieSection
        title={"Upcoming Movies"}
        movies={moviesList.upcomingMovies}
      />
    </div>
  );
}

export default SecondryContainer;
