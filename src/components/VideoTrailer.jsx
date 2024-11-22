import { useSelector } from "react-redux";
import useVideoTrailer from "../hooks/useVideoTrailer";


function VideoTrailer({ movieId }) {
  useVideoTrailer(movieId);
  const trailerKey = useSelector((state) => state?.movie?.trailerVideo);
  if (!trailerKey) return;
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerKey.key +
          "?autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        frameBorder="0"
      ></iframe>
    </div>
  );
}

export default VideoTrailer;
