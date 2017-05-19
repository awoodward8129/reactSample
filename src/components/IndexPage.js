import React from 'react';

import FlatButton from 'material-ui/FlatButton';
import Card from './card/Card';
import BlogCard from './card/BlogCard';
import {Col, Row, Grid} from 'react-bootstrap'
import SvgIcon from 'material-ui/SvgIcon';
export const IndexPage = () => {
  return (
  <div >
 

    <Grid>
      <Row>   
        <Col  md={5}>
        <BlogCard />
        </Col>
        <br className="visible-xs"/>
        <Col md={3}>
          <Card />
       </Col>
       <br className="visible-xs"/>
       <Col md={4}>
          <Card />
       </Col>
        </Row>
        <br/>
        <Row>
             <Col md={3}>
             </Col>
              <Col md={4}>
          <Card />
       </Col>
        </Row>

    </Grid>
  
  </div>
)
};

export default IndexPage;