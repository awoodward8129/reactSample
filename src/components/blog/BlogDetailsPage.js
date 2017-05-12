import React from 'react';
import { Link } from 'react-router-dom';

export const BlogDetailsPage  = ({blog}) =>  {
    return(
        <div> {blog.name} </div>
    )
}
export default BlogDetailsPage;