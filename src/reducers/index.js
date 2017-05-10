import { combineReducers } from 'redux';
import {booksReducer, bookReducer} from './bookReducers';
import {cartReducer} from './cartReducers';

export default combineReducers({
 books: booksReducer,
  book: bookReducer,
  cart: cartReducer
  // More reducers if there are
  // can go here
});