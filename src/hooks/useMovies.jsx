import { useDispatch, useSelector } from "react-redux";
import {
  addNewPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} from "../store/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import axios from "axios";

const useMovies = (urlEndPont, page, movieList) => {
  const dispatch = useDispatch();
  const newPlayingMovies = useSelector((state) => state.movie.newPlayingMovies);
  const popularMovies = useSelector((state) => state.movie.popularMovies);
  const topRatedMovies = useSelector((state) => state.movie.topRatedMovies);
  const upcomingMovies = useSelector((state) => state.movie.upcomingMovies);
  function fetchData() {
    if (movieList === "newPlayingMovies" && newPlayingMovies) return;
    if (movieList === "popularMovies" && popularMovies) return;
    if (movieList === "topRatedMovies" && topRatedMovies) return;
    if (movieList === "upcomingMovies" && upcomingMovies) return;
    axios
      .request(
        API_OPTIONS("https://thingproxy.freeboard.io/fetch/" + urlEndPont, page)
      )
      .then((res) => {
        switch (movieList) {
          case "newPlayingMovies":
            dispatch(addNewPlayingMovies(res.data.results));
            break;
          case "popularMovies":
            dispatch(addPopularMovies(res.data.results));
            break;
          case "topRatedMovies":
            dispatch(addTopRatedMovies(res.data.results));
            break;
          case "upcomingMovies":
            dispatch(addUpcomingMovies(res.data.results));
            break;
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }
  useEffect(() => {
    fetchData();
  }, []);
};

export default useMovies;
