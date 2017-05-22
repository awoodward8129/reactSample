import React from 'react';

import FlatButton from 'material-ui/FlatButton';
import Card from './card/Card';
import BlogCard from './card/BlogCard';
import {Col, Row, Grid} from 'react-bootstrap'
import SvgIcon from 'material-ui/SvgIcon';
import BlogPage from './blog/BlogPage'
export const IndexPage = ({blogs}) => {
  return (
    <BlogPage blogs={blogs}/>
)
};

export default IndexPage;