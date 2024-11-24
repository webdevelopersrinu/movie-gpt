import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import MovieLoadingSimmer from "./MovieLoadingSimmer";

function MoviePageLoadingSimmer() {
  return (
    <div className="bg-black">
      <div className="flex md:flex-row flex-col justify-around items-center ">
        <Skeleton width={250} height={300} />
        <div>
          <Skeleton count={5} width={300} height={20} />
        </div>
      </div>
      <div className="p-4">
        <Skeleton width={250} />
        <div className="flex flex-wrap gap-4 items-center justify-end py-3">
          <Skeleton circle={true} width={80} height={80} />
          <Skeleton circle={true} width={80} height={80} />
          <Skeleton circle={true} width={80} height={80} />
          <Skeleton circle={true} width={80} height={80} />
          <Skeleton circle={true} width={80} height={80} />
          <Skeleton circle={true} width={80} height={80} />
          <Skeleton circle={true} width={80} height={80} />
          <Skeleton circle={true} width={80} height={80} />
          <Skeleton circle={true} width={80} height={80} />
          <Skeleton circle={true} width={80} height={80} />
          <Skeleton circle={true} width={80} height={80} />
          <Skeleton circle={true} width={80} height={80} />{" "}
          <Skeleton circle={true} width={80} height={80} />
          <Skeleton circle={true} width={80} height={80} />
          <Skeleton circle={true} width={80} height={80} />
          <Skeleton circle={true} width={80} height={80} />
          <Skeleton circle={true} width={80} height={80} />
          <Skeleton circle={true} width={80} height={80} />{" "}
          <Skeleton circle={true} width={80} height={80} />
          <Skeleton circle={true} width={80} height={80} />
          <Skeleton circle={true} width={80} height={80} />
          <Skeleton circle={true} width={80} height={80} />
          <Skeleton circle={true} width={80} height={80} />
          <Skeleton circle={true} width={80} height={80} />
        </div>
      </div>
      <div >
        <MovieLoadingSimmer />
      </div>
    </div>
  );
}

export default MoviePageLoadingSimmer;
