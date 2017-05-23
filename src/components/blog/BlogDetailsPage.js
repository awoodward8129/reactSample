



import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as blogActions from '../../actions/blogActions';
import { Link } from 'react-router-dom';


class BlogDetailsPage extends Component {
   constructor(props) {
    super(props);
  
   }
     componentDidMount(){
    this.props.fetchBlogById(this.props.id);
  }



    render() {
        return (
            <div>
                <h1>{this.props.blog.title}</h1>
                <h2>{this.props.blog.subtitle}</h2>
            
            
                
            
            </div>
        )
    }
   }
const mapStateToProps = (state, ownProps) => {

  return {
    // You can now say this.props.book
   blog : state.blog
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    // You can now say this.props.createBook
     fetchBlogById: blog => dispatch(blogActions.fetchBlogById(blog)),


  }
};
   
export default connect(mapStateToProps, mapDispatchToProps)(BlogDetailsPage);