import React from "react";

function MovieDescription({ movieInfo }) {
  const { original_title, overview, vote_average, vote_count,status,release_date } = movieInfo;
  return (
    <div className="mx-5 flex flex-col gap-2 ">
      <h1 className="text-3xl font-bold capitalize ">{original_title}</h1>
      <span>
        Rating:{vote_average}+ | View:{vote_count}
      </span>
      <div>
        <h1 className="text-xl font-bold pb-1">Overview</h1>
        <span className="w-5/6 md:w-4/6 block line-clamp-2 sm:line-clamp-none" >{overview}</span>
      </div>
      <div>
        Staus: {status} | Release Data: {release_date}
      </div>
    </div>
  );
}

export default MovieDescription;
