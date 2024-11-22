import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoTrailer from "./VideoTrailer";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function PrimaryContainer() {
  const movies = useSelector((state) => state?.movie?.newPlayingMovies);

  if (!movies) {
    return <Skeleton width="100%" height={400} />;
  }
  const mainMovie = movies[0];
  const { id, original_title, overview } = mainMovie;
  return (
    <div className="overflow-hidden ">
      <VideoTitle overview={overview} title={original_title} />
      <VideoTrailer movieId={id} />
    </div>
  );
}

export default PrimaryContainer;
