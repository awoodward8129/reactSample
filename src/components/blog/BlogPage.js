import React from 'react';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';
import BlogCard from '../card/BlogCard'
const style = {
    background: '#03a9f4'
}
class BlogPage extends React.Component {
 
  constructor(props) {
    super(props);

  }
    render(){
        return(
         <Paper style={style} zDepth={1} >
        <div>    {Object.keys(this.props.blogs).map((b, i)  => (
             <BlogCard key={i} title={this.props.blogs[b].title} />
   
      
       ))}</div>
       </Paper>
    )
}
}
// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    // You can now say this.props.books
    blogs: state.blogs,

  }
};
export default connect(mapStateToProps) (BlogPage);