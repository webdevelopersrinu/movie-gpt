export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const API_OPTIONS = (urlEndPont, page) => {
  return {
    method: "GET",
    url: urlEndPont,
    params: { language: "en-US", page },
    headers: {
      accept: "application/json",
      Authorization: import.meta.env.VITE_TMDB_TOKEN,
    },
  };
};

export const API_OPTIONS_FETCH = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_TMDB_TOKEN,
  },
};

export const MOVIE_TRAILER_OPTIONS = (id) => {
  return {
    method: "GET",
    url:
      "https://thingproxy.freeboard.io/fetch/https://api.themoviedb.org/3/movie/" +
      id +
      "/videos",
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization: import.meta.env.VITE_TMDB_TOKEN,
    },
  };
};

export const MOVIE_CREDITS_OPTIONS = (id) => {
  return {
    method: "GET",
    url:
      "https://thingproxy.freeboard.io/fetch/https://api.themoviedb.org/3/movie/" +
      id +
      "/credits",
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization: import.meta.env.VITE_TMDB_TOKEN,
    },
  };
};

export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w440_and_h660_face";
