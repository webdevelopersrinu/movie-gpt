import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import { API_OPTIONS_FETCH } from "../utils/constants";


const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

// search movie in TMDB
const searchMovieTMDB = async (movie) => {
  const data = await fetch(
    "https://thingproxy.freeboard.io/fetch/https://api.themoviedb.org/3/search/movie?query=" +
      movie +
      "&include_adult=false&language=en-US&page=1",
    API_OPTIONS_FETCH
  );
  const json = await data.json();

  return json.results;
};

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function geminiApi(inputPromte) {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  const result = await chatSession.sendMessage(inputPromte);
  const rawMovieNames = await result.response.text();
  const AiMovies=rawMovieNames.split(",").map((movie) => movie.trim()).filter((movie) => movie.length > 0)
  const promiseArray = AiMovies.map((movie) => searchMovieTMDB(movie));
  const tmdbResults = await Promise.all(promiseArray);
  return { movieNames: AiMovies, movieResults: tmdbResults };
}

export default geminiApi;
