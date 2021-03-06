// ./src/actions/bookActions.js
import Axios from 'axios';
import actionTypes from './actionTypes';
import firebase from '../data/firebaseDatabase.js'
  const books = firebase.database().ref().child('books');

//API URL
const apiUrl = 'http://590cb93b1c626d0011c11f39.mockapi.io/api/book';

export const fetchDatabaseSuccess = (database) => {
  return {
    type: 'FETCHDATABASE_SUCCESS',
    database
  }
};

export const fetchBooksSuccess = (books) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    books
  }
};
//Async Action
export const fetchBooks = () => {
  // Returns a dispatcher function
  // that dispatches an action at a later time
  return (dispatch) => {
    // Returns a promise
    books.on('value',  snapshot => {

      dispatch(
        fetchBooksSuccess(snapshot.val())
      )
    })
    // return Axios.get(apiUrl)
    //   .then(response => {
    //     // Dispatch another action
    //     // to consume data
    //     dispatch(fetchBooksSuccess(response.data))
    //   })
    //   .catch(error => {
    //     throw(error);
    //   });
  };
};
export const createBook = (book) => {
  return (dispatch) => {
         books.push(book);
    // return Axios.post(apiUrl, book)
    //   .then(response => {
    //     // Dispatch a synchronous action
    //     // to handle data
    //     dispatch(createBookSuccess(response.data))
    //   })
    //   .catch(error => {
    //     throw(error);
    //   });
  };
};

export const updateBook = (book, id) => {
  return (dispatch) => {
        books.child(id).set(book);
    // return Axios.put(apiUrl + '/' +book.id, book)
    //   .then(response => {
    //     // Dispatch a synchronous action
    //     // to handle data
    //     dispatch(updateBookSuccess(response.data))
    //   })
    //   .catch(error => {
    //     throw(error);
    //   });
  };
};


export const deleteBookSuccess = (book) => {
  // Return action
  return {
    // Unique identifier
    type: 'DELETE_BOOK_SUCCESS',
    // Payload
    book: null
  }
};
export const deleteBook = (bookId) => {
  return (dispatch) => {
      books.child(bookId).remove();
    // return Axios.delete(apiUrl+'/'+book.id)
    //   .then(response => {
    //     // Dispatch a synchronous action
    //     // to handle data
    //     dispatch(deleteBookSuccess(response.data))
    //     dispatch(fetchBooks());
    //   })
    //   .catch(error => {
    //     throw(error);
    //   });
  };
};
export const updateBookSuccess = (book) => {
  // Return action
  return {
    // Unique identifier
    type: 'UPDATE_BOOK_SUCCESS',
    // Payload
    book: book
  }
};

export const createBookSuccess = (book) => {
  // Return action
  return {
    // Unique identifier
    type: 'CREATE_BOOK_SUCCESS',
    // Payload
    book: book
  }
};
// Sync Action
export const fetchBookByIdSuccess = (book) => {
  return {
    type: 'FETCH_BOOK_BY_ID_SUCCESS',
    book
  }
};
// Async Action
export const fetchBookById = (id) => {
  return (dispatch) => {
    books.child(id).on('value',  snapshot => {
      dispatch(
        fetchBookByIdSuccess(snapshot.val())
      )
    })
    // return Axios.get(apiUrl + '/' +bookId)
    //   .then(response => {
    //     // Handle data with sync action
    //     dispatch(fetchBookByIdSuccess(response.data));
    //   })
    //   .catch(error => {
    //     throw(error);
    //   });
  };
};
export const addToCartSuccess = (item) =>{
  return {
    type:'ADD_TO_CART_SUCCESS',
    item
  }
};
export const addToCart = (item) => {
  return (dispatch) => {
    return Axios.post('http://590cb93b1c626d0011c11f39.mockapi.io/api/cart', item)
      .then(response => {
        dispatch(addToCartSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      })
  }
};
// Sync load cart
export const fetchCartSuccess = (items) => {
  return {
    type: 'FETCH_CART_SUCCESS',
    items
  }
};
// Async load cart
export const fetchCart = () => {
  return (dispatch) => {
    return Axios.get('http://590cb93b1c626d0011c11f39.mockapi.io/api/cart')
      .then(response => {
        dispatch(fetchCartSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};
