import counterReducer from './counter';
import loggedReducer from './isLogged';
import postsReducer from './posts';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  posts: postsReducer
})

export default allReducers;
