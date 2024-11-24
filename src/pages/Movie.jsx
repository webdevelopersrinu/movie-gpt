import React from "react";
import { useParams } from "react-router-dom";
import useGetMovie from "../hooks/useGetMovie.jsx";
import Header from "../components/Header.jsx";
import MovieBanner from "../components/MovieBanner.jsx";
import Actors from "../components/Actors.jsx";
import SimilarMovies from "../components/SimilarMovies.jsx";
import { useSelector } from "react-redux";
import MoviePageLoadingSimmer from "../components/MoviePageLoadingSimmer.jsx";

function Movie() {
  const { id: movieId } = useParams();
  const onLoad = useSelector((state) => state.moviePage.onLoad);
  // Call the custom hook
  useGetMovie(movieId);
  if (onLoad) return <MoviePageLoadingSimmer />;
  return (
    <div className="text-white bg-black">
      <div>
        <MovieBanner />
        <Actors />
        <SimilarMovies />
      </div>
    </div>
  );
}

export default Movie;
