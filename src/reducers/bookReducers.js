// ./src/reducers/bookReducers.js
import actionTypes from "../actions/actionTypes";
// export default (state = [], action) => {
//   switch (action.type){
//     // Check if action dispatched is
//     // CREATE_BOOK and act on that
//     case 'CREATE_BOOK':
//           return [
//           ...state,
//           Object.assign({}, action.book)
//         ];
//     case 'FETCH_BOOKS_SUCCESS':
//           return action.books;
//     default:
//           return state;
//   }
// };

export const booksReducer = (state = [], action) => {
  switch (action.type){
    case 'CREATE_BOOK_SUCCESS':
      return[...state, Object.assign({}, action.book)
      ];
    case 'FETCH_BOOKS_SUCCESS':
      return action.books;
    default: 
      return state;
  }
}

// For handling a single book
export const bookReducer = (state = [], action) => {
  switch (action.type) {
    // Handle fetch by Id
    case 'FETCH_BOOK_BY_ID_SUCCESS':
      return action.book;
    default:
      return state;
  }
};
