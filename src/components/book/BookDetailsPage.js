// ./src/components/book/BookDetailsPage.js

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BookDetails from './BookDetails'
import * as bookActions from '../../actions/bookActions';
import { Link } from 'react-router-dom';

class BookDetailsPage extends Component {
   constructor(props) {
    super(props);
  
   }
   addToCart(book){
      const item = {
        title: book.title,
        price: book.price
      };
      this.props.addToCart(item);
    }

    render() {
        return (
            <div>
                <h1>Book Details Page</h1>
               <BookDetails book={this.props.book} addToCart={this.addToCart.bind(this)}/>
            </div>
        )
    }
   }
const mapStateToProps = (state, ownProps) => {
  state.book = ownProps.book;
  return {
    // You can now say this.props.book
   book : state.book

  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    // You can now say this.props.createBook
     fetchBookById: bookId => dispatch(bookActions.fetchBookById(bookId)),
     addToCart: item => dispatch(bookActions.addToCart(item))
 
    
  }
};
   
export default connect(mapStateToProps, mapDispatchToProps)(BookDetailsPage);