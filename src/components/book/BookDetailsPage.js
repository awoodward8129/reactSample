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
     componentDidMount(){
    this.props.fetchBookById(this.props.id);
  }
   addToCart(book){
      const item = {
        title: book.title,
        price: book.price
      };
      this.props.addToCart(item);
    }

    deleteBook(){
     
      this.props.deleteBook(this.props.id);
      this.props.history.goBack();
    }

    render() {
        return (
            <div>
                <h1>Book Details Page</h1>
               <BookDetails book={this.props.book} addToCart={this.addToCart.bind(this)}
                deleteBook={this.deleteBook.bind(this)} id={this.props.id}  />
                
            
            </div>
        )
    }
   }
const mapStateToProps = (state, ownProps) => {

  return {
    // You can now say this.props.book
   book : state.book
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    // You can now say this.props.createBook
     fetchBookById: book => dispatch(bookActions.fetchBookById(book)),
     addToCart: item => dispatch(bookActions.addToCart(item)),
     deleteBook: book => dispatch(bookActions.deleteBook(book)),

  }
};
   
export default connect(mapStateToProps, mapDispatchToProps)(BookDetailsPage);