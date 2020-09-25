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

const getData = (currentData, isSearch, payload, page, reset) => {
  if (!isSearch && !reset) {
    return currentData.concat(payload);
  } else if (page === 1 && isSearch) {
    return payload;
  } else if (page !== 1 && isSearch) {
    return currentData.concat(payload);
  } else if (reset) {
    return payload;
  }
};

const popularMoviesReducer = (state = initialState, action) => {
  const movieData = getData(
    state.popularMovies,
    action.isSearched,
    action.payload,
    action.page,
    action.reset,
  );
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
