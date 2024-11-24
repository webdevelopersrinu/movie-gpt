import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const moviePageSlice = createSlice({
  name: "moviePage",
  initialState: {
    moviePageData: null,
    similarMovies: null,
    actors: null,
    onLoad: false,
  },
  reducers: {
    addMovieData: (state, action) => {
      state.moviePageData = action.payload;
    },
    startLoading: (state) => {
      state.onLoad = true;
    },
    finishLoading: (state) => {
      state.onLoad = false;
    },
    addSimilarMovies: (state, action) => {
      state.similarMovies = action.payload;
    },
    addActors: (state, action) => {
      state.actors = action.payload;
    },
  },
});

export const {
  addMovieData,
  addSimilarMovies,
  addActors,
  startLoading,
  finishLoading,
} = moviePageSlice.actions;

export default moviePageSlice.reducer;
