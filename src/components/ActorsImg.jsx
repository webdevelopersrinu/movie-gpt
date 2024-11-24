import React from "react";
import { IMG_BASE_URL } from "../utils/constants";

function ActorsImg({ actor }) {
  const { name, profile_path } = actor;
  if (!profile_path) return;
  return (
    <div className="mx-4 max-w-16 min-w-16 md:max-w-28 md:min-w-28 ">
      <img
        src={IMG_BASE_URL + profile_path}
        className="w-full aspect-square rounded-full"
      />
      <p className="w-full text-sm text-center text-nowrap py-1 overflow-clip line-clamp-1">
        {name}
      </p>
    </div>
  );
}

export default ActorsImg;
