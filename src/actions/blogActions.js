// ./src/actions/bookActions.js
import Axios from 'axios';
import actionTypes from './actionTypes';
import firebase from '../data/firebaseDatabase.js'
  const blogs = firebase.database().ref().child('blogs');


export const fetchBlogsSuccess = (blogs) => {
  return {
    type: 'FETCH_BLOGS_SUCCESS',
    blogs
  }
};
//Async Action
export const fetchBlogs = () => {
  // Returns a dispatcher function
  // that dispatches an action at a later time
  return (dispatch) => {
    // Returns a promise
    blogs.on('value',  snapshot => {

      dispatch(
        fetchBlogsSuccess(snapshot.val())
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
         blogs.push(book);
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
        blogs.child(id).set(book);
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
      blogs.child(bookId).remove();
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
export const fetchBlogByIdSuccess = (blog) => {
  return {
    type: 'FETCH_BLOG_BY_ID_SUCCESS',
    blog
  }
};
// Async Action
export const fetchBlogById = (id) => {
  return (dispatch) => {
    blogs.child(id).on('value',  snapshot => {
      dispatch(
        fetchBlogByIdSuccess(snapshot.val())
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
