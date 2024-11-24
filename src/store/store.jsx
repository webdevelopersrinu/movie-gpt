import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.jsx";
import movieReducer from "./movieSlice.jsx";
import gptSlice from "./gptSlice.jsx";
import moviePageReducer from "./moviePageSlice.jsx";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    gpt: gptSlice,
    moviePage: moviePageReducer,
  },
});

export default appStore;
