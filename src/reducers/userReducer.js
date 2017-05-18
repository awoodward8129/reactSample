
export const userReducer =  (state = [], action) => {
  switch (action.type) {
    case 'FETCH_CURRENT_USER_SUCCESS':
      return action.user;
    case 'SIGNIN_ERROR':
      return action.user;
    default:
      return state;
  }
};