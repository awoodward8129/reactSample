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

      const currentUser ={
       email : user.email,
       
      }
        if (user) {
            dispatch(
            fetchCurrentUserSuccess(currentUser)
          )
        } else {
          // No user is signed in.
        }
      })
  };
};
