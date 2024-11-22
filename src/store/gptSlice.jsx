import { createSlice } from "@reduxjs/toolkit";

const getSliuce = createSlice({
  name: "gpt",
  initialState: {
    searchGpt: false,
    movieNames: null,
    movieResults: null,
    onSearch: false,
  },
  reducers: {
    changeSearchState: (state) => {
      state.searchGpt = !state.searchGpt;
    },
    addAiMovieResults: (state, action) => {
      state.movieNames = action.payload.movieNames;
      state.movieResults = action.payload.movieResults;
    },
    addOnSearch: (state) => {
      state.onSearch = true;
    },
    removeOnSearch: (state) => {
      state.onSearch = false;
    },
  },
});

export const {
  changeSearchState,
  addAiMovieResults,
  addOnSearch,
  removeOnSearch,
} = getSliuce.actions;
export default getSliuce.reducer;
