import React from 'react';
import { Link } from 'react-router-dom';

export const BlogPage  = ({blogs}) =>  {
    return(
        <div>    {blogs.map((blog, index) => (
         <Link key={blog.id} to={`/blog/${blog.id}`}> 
          <div> {blog.id} </div>
         </Link>
       ))}</div>
    )
}
export default BlogPage;