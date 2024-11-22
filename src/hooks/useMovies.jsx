import { useDispatch } from "react-redux";
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
  function fetchData() {
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
