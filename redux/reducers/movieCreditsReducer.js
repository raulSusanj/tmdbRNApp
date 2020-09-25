import {
  FETCHING_MOVIE_CREDITS_REQUEST,
  FETCHING_MOVIE_CREDITS_SUCCESS,
  FETCHING_MOVIE_CREDITS_FAILURE,
} from '../actions/types';

const initialState = {
  isFetching: false,
  errorMessage: '',
  movieCredits: {},
};

const movieCreditsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_MOVIE_CREDITS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_MOVIE_CREDITS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case FETCHING_MOVIE_CREDITS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        movieCredits: action.payload,
      };
    default:
      return state;
  }
};

export default movieCreditsReducer;
