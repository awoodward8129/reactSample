
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


export const blogReducer = (state = [], action) => {
  switch (action.type) {
    // Handle fetch by Id
    case 'FETCH_BLOG_BY_ID_SUCCESS':
      return action.blog;
    default:
      return state;
  }
};

