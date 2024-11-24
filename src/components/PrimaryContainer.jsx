import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoTrailer from "./VideoTrailer";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function PrimaryContainer() {
  const movies = useSelector((state) => state?.movie?.newPlayingMovies);

  if (!movies) {
    return (
      <div className="w-full aspect-video  bg-gray-200 rounded-lg overflow-hidden relative">
        <div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"
          style={{ backgroundSize: "200% 100%" }}
        ></div>
      </div>
    );
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
