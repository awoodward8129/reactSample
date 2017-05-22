import React from 'react';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';
import BlogCard from '../card/BlogCard'
import { Col, Row, Grid } from 'react-bootstrap'
const style = {
    background: '#03a9f4'
}
class BlogPage extends React.Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (

            <SetUpGrid props={this.props} />
        )
    }
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
function SetUpGrid(values) {
        return (
        <Grid>
                <Row>
            {Object.keys(values.props.blogs).map((b, i) => (
              
                <Col md={getRandomInt(2,5)}>
                <BlogCard key={i} title={values.props.blogs[b].title} />
                <br/>
                </Col>
            ))
            }
            </Row>
        </Grid>
        )

}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
    return {
        // You can now say this.props.books
        blogs: state.blogs,

    }
};
export default connect(mapStateToProps)(BlogPage);