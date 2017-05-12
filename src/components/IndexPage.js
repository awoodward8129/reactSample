import React from 'react';
import Greeting from './Greeting';

import { Link } from 'react-router-dom';

export const IndexPage = ({ blogs }) => (

  <div >
    <div >
        <Greeting name='Alex'/>
      {blogs.map((blog, index) => (
         <Link key={blog.id} to={`/blog/${blog.id}`}> 
          <div> {blog.id} </div>
         </Link>
       ))}
    </div>
   
  </div>
);

export default IndexPage;