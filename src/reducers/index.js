import { combineReducers } from 'redux';
import {booksReducer, bookReducer} from './bookReducers';
import {cartReducer} from './cartReducers';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
 books: booksReducer,
  book: bookReducer,
  cart: cartReducer,
  form: formReducer
  // More reducers if there are
  // can go here
});