// ./src/actions/bookActions.js
import Axios from 'axios';
import actionTypes from './actionTypes';
import database from '../data/firebaseDatabase'
//API URL

export const fetchCurrentUserSuccess = (user) => {
  return {
    type: 'FETCH_CURRENT_USER_SUCCESS',
    user
  }
};
//Async Action
export const fetchCurrentUser = () => {
  // Returns a dispatcher function
  // that dispatches an action at a later time
  return (dispatch) => {
    // Returns a promise
    database.auth().onAuthStateChanged(function(user) {

        if (user) {
          
          const currentUser ={
          email : user.email,
          
          }
            dispatch(
            fetchCurrentUserSuccess(currentUser)
          )
        } else {
            user={}
             dispatch(
            fetchCurrentUserSuccess(user)
          )
        }
      })
  };
};
// export const createUserSuccess = (user) => {
//   return {
//     type: 'CREATE_USER_SUCCESS',
//     user
//   }
// };
// //Async Action
// export const createUser = (user) => {
//   // Returns a dispatcher function
//   // that dispatches an action at a later time
//   return (dispatch) => {
//     // Returns a promise
//     database.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // ...
// });
//   };
// };

export const signIn = (user) => {
   return (dispatch) => {
    database.auth().signInWithEmailAndPassword(user.email, user.password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
   }
}

//Async Action
export const signOut = () => {
  // Returns a dispatcher function
  // that dispatches an action at a later time
   return (dispatch) => {
      // Returns a promise
      database.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
   }
};

