import React from 'react';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
const style = {
    background: '#03a9f4'
}
export const BlogPage  = ({blogs}) =>  {
    return(
         <Paper style={style} zDepth={1} >
        <div>    {blogs.map((blog, index) => (
         <Link key={blog.id} to={`/blog/${blog.id}`}> 
          <div> {blog.id} </div>
         </Link>
       ))}</div>
       </Paper>
    )
}
export default BlogPage;