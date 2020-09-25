import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import popularMoviesReducer from './reducers/popularMoviesReducer';
import movieReducer from './reducers/movieReducer';
import movieCreditsReducer from './reducers/movieCreditsReducer';

const rootReducer = combineReducers({
  popularMoviesReducer: popularMoviesReducer,
  movieReducer: movieReducer,
  movieCreditsReducer: movieCreditsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
