import { API_KEY } from '@env';
import {
  FETCHING_POPULAR_MOVIES_REQUEST,
  FETCHING_POPULAR_MOVIES_SUCCESS,
  FETCHING_POPULAR_MOVIES_FAILURE,
  FETCHING_MOVIE_REQUEST,
  FETCHING_MOVIE_SUCCESS,
  FETCHING_MOVIE_FAILURE,
  FETCHING_MOVIE_CREDITS_REQUEST,
  FETCHING_MOVIE_CREDITS_SUCCESS,
  FETCHING_MOVIE_CREDITS_FAILURE,
} from './types';

export const fetchingPopularMoviesRequest = () => ({
  type: FETCHING_POPULAR_MOVIES_REQUEST,
});
export const fetchingPopularMoviesSuccess = (json, search, page) => ({
  type: FETCHING_POPULAR_MOVIES_SUCCESS,
  payload: json,
  isSearched: search ? true : false,
  page: page,
});
export const fetchingPopularMoviesFailure = (error) => ({
  type: FETCHING_POPULAR_MOVIES_FAILURE,
  payload: error,
});

export const fetchPopularMovies = (search, page = 1) => {
  return async (dispatch) => {
    let endpoint = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
    if (search) {
      endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=${page}&query=${search}`;
    }
    dispatch(fetchingPopularMoviesRequest());
    try {
      let response = await fetch(endpoint);
      let json = await response.json();
      dispatch(fetchingPopularMoviesSuccess(json.results, search, json.page));
    } catch (error) {
      dispatch(fetchingPopularMoviesFailure(error));
    }
  };
};

export const fetchingMovieRequest = () => ({
  type: FETCHING_MOVIE_REQUEST,
});
export const fetchingMovieSuccess = (json) => ({
  type: FETCHING_MOVIE_SUCCESS,
  payload: json,
});
export const fetchingMovieFailure = (error) => ({
  type: FETCHING_MOVIE_FAILURE,
  payload: error,
});

export const fetchMovie = (id) => {
  return async (dispatch) => {
    dispatch(fetchingMovieRequest());
    try {
      let response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`,
      );
      let json = await response.json();
      dispatch(fetchingMovieSuccess(json));
    } catch (error) {
      dispatch(fetchingMovieFailure(error));
    }
  };
};

export const fetchingMovieCreditsRequest = () => ({
  type: FETCHING_MOVIE_CREDITS_REQUEST,
});
export const fetchingMovieCreditsSuccess = (json) => ({
  type: FETCHING_MOVIE_CREDITS_SUCCESS,
  payload: json,
});
export const fetchingMovieCreditsFailure = (error) => ({
  type: FETCHING_MOVIE_CREDITS_FAILURE,
  payload: error,
});

export const fetchMovieCredits = (id) => {
  return async (dispatch) => {
    dispatch(fetchingMovieCreditsRequest());
    try {
      let response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`,
      );
      let json = await response.json();
      dispatch(fetchingMovieCreditsSuccess(json));
    } catch (error) {
      dispatch(fetchingMovieCreditsFailure(error));
    }
  };
};
