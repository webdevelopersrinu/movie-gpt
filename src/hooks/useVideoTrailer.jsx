import axios from "axios";
import { useEffect } from "react";
import { MOVIE_TRAILER_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../store/movieSlice.jsx";

function useVideoTrailer(id) {
  const dispatch = useDispatch();
  async function movieDataGetByID() {
    axios
      .request(MOVIE_TRAILER_OPTIONS(id))
      .then((res) => {
        const trailerArr = res?.data?.results?.filter(
          (item) => item.type === "Trailer"
        );
        const bgVideo = trailerArr[0] ? trailerArr[0] : res?.data?.results[0];
        dispatch(addTrailerVideo(bgVideo));
      })
      .catch((err) => console.error(err));
  }
  useEffect(() => {
    movieDataGetByID();
  }, []);
}
export default useVideoTrailer;
