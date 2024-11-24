import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function MovieLoadingSimmer() {
  return (
    <div style={{scrollbarWidth:"none"}} className="bg-black flex items-center justify-center overflow-x-scroll py-3 ">
      <div className="min-w-[150px] max-w-[150px] md:min-w-[250px] md:max-w-[250px] h-48 mx-6">
        <Skeleton height={200} />
      </div>
      <div className="min-w-[150px] max-w-[150px] md:min-w-[250px] md:max-w-[250px] h-48 mx-6">
        <Skeleton height={200} />
      </div>
      <div className="min-w-[150px] max-w-[150px] md:min-w-[250px] md:max-w-[250px] h-48 mx-6">
        <Skeleton height={200} />
      </div>
      <div className="min-w-[150px] max-w-[150px] md:min-w-[250px] md:max-w-[250px] h-48 mx-6">
        <Skeleton height={200} />
      </div>
      <div className="min-w-[150px] max-w-[150px] md:min-w-[250px] md:max-w-[250px] h-48 mx-6">
        <Skeleton height={200} />
      </div>
      <div className="min-w-[150px] max-w-[150px] md:min-w-[250px] md:max-w-[250px] h-48 mx-6">
        <Skeleton height={200} />
      </div>
      <div className="min-w-[150px] max-w-[150px] md:min-w-[250px] md:max-w-[250px] h-48 mx-6">
        <Skeleton height={200} />
      </div>
      <div className="min-w-[150px] max-w-[150px] md:min-w-[250px] md:max-w-[250px] h-48 mx-6">
        <Skeleton height={200} />
      </div>
    </div>
  );
}

export default MovieLoadingSimmer;
