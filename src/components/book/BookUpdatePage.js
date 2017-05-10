import React from 'react'
import BookUpdateForm from './BookUpdateForm';
import * as bookActions from '../../actions/bookActions';
import {connect} from 'react-redux'

class BookUpdatePage extends React.Component {
constructor(props) {
    super(props);
  }
  submit = (values) => {
    // Do something with the form values
    console.log(values);
  }

  render() {
    return (
      <BookUpdateForm onSubmit={this.submit}/>
    );
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
     addToCart: item => dispatch(bookActions.addToCart(item)),
     deleteBook: book => dispatch(bookActions.deleteBook(book)),
     updateBook: book => dispatch(bookActions.updateBook(book))
  }
};
   
export default connect(mapStateToProps, mapDispatchToProps)(BookUpdatePage);

