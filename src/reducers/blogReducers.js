
export const blogsReducer = (state = [], action) => {
  switch (action.type){
    case 'CREATE_BOOK_SUCCESS':
      return[...state, Object.assign({}, action.book)
      ];
    case 'FETCH_BLOGS_SUCCESS':
      return action.blogs;
      
    default: 
      return state;
  }
}
