import React from "react";
import { IoPlayCircleOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";

function VideoTitle({ title, overview }) {
  return (
    <div className="pt-23 sm:pt-32  pl-5 bg-gradient-to-r from-black text-white absolute aspect-video flex flex-col items-start Lg:gap-7 gap-2">
      <p className="text-2xl sm:text-4xl font-bold my-2 sm:my-4">{title}</p>
      <p className="text-xl w-9/12 lg:w-4/12 line-clamp-2 sm:line-clamp-none ">{overview}</p>
      <div className="py-4 flex items-center justify-start gap-6">
        <button className=" px-4 py-2 rounded-lg text-black bg-white text-sm sm:text-2xl capitalize flex items-center justify-center gap-3 hover:bg-opacity-75">
          <IoPlayCircleOutline /> play
        </button>
        <button className="px-4 py-2 rounded-lg text-black bg-white text-sm sm:text-2xl capitalize flex items-center justify-center gap-3 hover:bg-opacity-75">
          <IoIosInformationCircleOutline />
          more info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
