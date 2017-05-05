import React from 'react';
import { Link } from 'react-router-dom';

export const BlogPage  = ({blog}) =>  {
    return(
        <div> {blog.name} </div>
    )
}
export default BlogPage;