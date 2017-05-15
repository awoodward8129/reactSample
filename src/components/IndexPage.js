import React from 'react';
import Greeting from './Greeting';

import { Link } from 'react-router-dom';

export const IndexPage = () => {
  return (
  <div >
    <div >
        <Greeting name='Alex'/>
    </div>
  </div>
)
};

export default IndexPage;