import {
  FETCHING_MOVIE_REQUEST,
  FETCHING_MOVIE_SUCCESS,
  FETCHING_MOVIE_FAILURE,
} from '../actions/types';

const initialState = {
  isFetching: false,
  errorMessage: '',
  movie: {},
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_MOVIE_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_MOVIE_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case FETCHING_MOVIE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        movie: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
