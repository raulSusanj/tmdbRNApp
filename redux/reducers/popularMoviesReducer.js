import {
  FETCHING_POPULAR_MOVIES_REQUEST,
  FETCHING_POPULAR_MOVIES_SUCCESS,
  FETCHING_POPULAR_MOVIES_FAILURE,
} from '../actions/types';

const initialState = {
  isFetching: false,
  errorMessage: '',
  popularMovies: [],
  page: 1,
};

const getData = (currentData, isSearch, payload) => {
  if (!isSearch) {
    return currentData.concat(payload);
    // return [{ ...currentData }, { ...payload }];
  } else {
    return payload;
  }
};

const popularMoviesReducer = (state = initialState, action) => {
  const movieData = getData(state.popularMovies, action.search, action.payload);
  switch (action.type) {
    case FETCHING_POPULAR_MOVIES_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_POPULAR_MOVIES_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case FETCHING_POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        popularMovies: movieData,
        page: action.page,
      };
    default:
      return state;
  }
};

export default popularMoviesReducer;
