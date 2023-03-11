import { AllMOVIES, MovieApi } from "../type/moviesType";
import axios from "axios";

export const getAllMovies = () => {
  return async (dispattch) => {
    const res = await axios.get(MovieApi);
    console.log(res.data);
    dispattch({
      type: AllMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};

export const getMovieSearch = (word) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=05f743207f421bddfe0aa49dccadb44a&query=${word}&language=ar`
    );

    dispatch({
      type: AllMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};

export const getPages = (page) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=05f743207f421bddfe0aa49dccadb44a&language=ar&page=${page}`
    );

    dispatch({
      type: AllMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};
