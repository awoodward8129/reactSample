import { combineReducers } from 'redux';
import {booksReducer, bookReducer} from './bookReducers'

export default combineReducers({
 books: booksReducer,
  book: bookReducer
  // More reducers if there are
  // can go here
});