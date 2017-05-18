import { combineReducers } from 'redux';
import {booksReducer, bookReducer} from './bookReducers';
import {cartReducer} from './cartReducers';
import {reducer as formReducer} from 'redux-form';
import {userReducer} from './userReducer';

export default combineReducers({
 books: booksReducer,
  book: bookReducer,
  cart: cartReducer,
  form: formReducer,
  user: userReducer
  // More reducers if there are
  // can go here
});