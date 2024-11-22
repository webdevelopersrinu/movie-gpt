import React from "react";
import { toast } from "react-toastify";
import geminiApi from "../config/geminiApi";
import { useDispatch } from "react-redux";
import {
  addAiMovieResults,
  addOnSearch,
  removeOnSearch,
} from "../store/gptSlice";

function GPTsearchBar() {
  const aiSearch = React.useRef(null);
  const dispatch = useDispatch();
  async function handeleAiSearch(e) {
    if (aiSearch.current.value === "") {
      return toast.error("Please enter any text before searching.");
    }
    dispatch(addOnSearch());
    const geminiAiQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      aiSearch.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    const aiMoviesData = await geminiApi(geminiAiQuery);
    dispatch(addAiMovieResults(aiMoviesData));
    dispatch(removeOnSearch());
  }
  return (
    <div className="bg-black  p-4 w-3/5 rounded-xl flex">
      <input
        type="text"
        ref={aiSearch}
        placeholder="What are you looking for?"
        className=" px-5 py-2 rounded-lg mr-3 w-4/5"
      />
      <button
        onClick={(e) => handeleAiSearch(e)}
        className="pb-2 text-xl font-bold px-4 pt-2 rounded-3xl capitalize bg-red-700  text-white cursor-pointer hover:bg-white hover:text-red-700 w-1/5"
      >
        Search
      </button>
    </div>
  );
}

export default GPTsearchBar;
