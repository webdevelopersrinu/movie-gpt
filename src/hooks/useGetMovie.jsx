import { useEffect } from "react";
import axios from "axios";
import { API_OPTIONS_FETCH, MOVIE_CREDITS_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import {
  addActors,
  addSimilarMovies,
  addMovieData,
  finishLoading,
  startLoading,
} from "../store/moviePageSlice";

function useGetMovie(MovieId) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!MovieId) return;

    const fetchMovieData = async () => {
      dispatch(startLoading());
      try {
        // Movie data
        const movieData = await fetch(
          `https://thingproxy.freeboard.io/fetch/https://api.themoviedb.org/3/movie/${MovieId}?language=en-US`,
          API_OPTIONS_FETCH
        ).then((res) => res.json());
        dispatch(addMovieData(movieData));

        // Similar movies
        const similarMovies = await fetch(
          `https://thingproxy.freeboard.io/fetch/https://api.themoviedb.org/3/movie/${MovieId}/similar?language=en-US&page=1`,
          API_OPTIONS_FETCH
        ).then((res) => res.json());
        dispatch(addSimilarMovies(similarMovies.results));

        // Actors
        const axiosOptions = MOVIE_CREDITS_OPTIONS(MovieId);
        const actorsData = await axios(axiosOptions);
        dispatch(addActors(actorsData.data.cast));
      } catch (error) {
        console.error(error);
      } finally {
        dispatch(finishLoading());
      }
    };

    fetchMovieData();
  }, [MovieId, dispatch]);
}

export default useGetMovie;
