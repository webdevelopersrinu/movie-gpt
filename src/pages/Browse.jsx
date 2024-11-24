import { useSelector } from "react-redux";
import PrimaryContainer from "../components/PrimaryContainer";
import SecondryContainer from "../components/SecondryContainer";
import useMovies from "../hooks/useMovies";
import GPTsearch from "./GPTsearch";
function Browse() {
  const gptSearch = useSelector((state) => state.gpt.searchGpt);
  useMovies(
    "https://api.themoviedb.org/3/movie/now_playing",
    1,
    "newPlayingMovies"
  );
  useMovies("https://api.themoviedb.org/3/movie/popular", 1, "popularMovies");
  useMovies(
    "https://api.themoviedb.org/3/movie/top_rated",
    1,
    "topRatedMovies"
  );
  useMovies("https://api.themoviedb.org/3/movie/upcoming", 1, "upcomingMovies");
  return (
    <div>
      <>
        <PrimaryContainer />
        <SecondryContainer />
      </>
    </div>
  );
}

export default Browse;
