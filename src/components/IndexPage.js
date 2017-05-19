import React from 'react';

import FlatButton from 'material-ui/FlatButton';
import Card from './card/card';
import {Col, Row, Grid} from 'react-bootstrap'

export const IndexPage = () => {
  return (
  <div >
    <Grid>
      <Row>   
        <Col  md={5}>
        <Card />
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
        
        <FlatButton >Blogs</FlatButton>
        <FlatButton >Reviews</FlatButton>
        <FlatButton >Photos</FlatButton>
    </Grid>
  
  </div>
)
};

export default IndexPage;