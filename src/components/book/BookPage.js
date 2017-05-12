// ./src/components/common/AboutPage.js
import React from 'react';
import { connect } from 'react-redux';
import BookForm from './BookForm';
import { Link } from 'react-router-dom';
import * as bookActions from '../../actions/bookActions';
import BookDetailsPage from './BookDetailsPage';


class Book extends React.Component {
  constructor(props) {
    super(props);

  }

  submitBook(input) {
    this.props.createBook(input);
  }

  render() {
    return (
      <div className="row">
        <h1>Book Page</h1>

        <div className="col-md-6">
          <h3>Books</h3>

          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              
              {this.props.books.map((b, i) => <tr key={i}>
                <td>{b.title}</td>
                <td><Link key={b.id} to={`/books/${b.key}`}>View</Link></td>
                  <td><Link key={b.id} to={`/bookUpdate/${b.id}`}>Update</Link></td>
              </tr>)}
            </tbody>
          </table>
        </div>

        <div className="col-md-6">
          <h3>New Book</h3>
          {/* Import and inject Book form */}
          <BookForm submitBook={this.submitBook.bind(this)} />
       <button className="btn btn-warning" onClick={e => this.props.history.push('/')}>go back</button>
        </div>
      </div>

    );
  }
};
// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    // You can now say this.props.books
    books: state.books,
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    // You can now say this.props.createBook
    createBook: book => dispatch(bookActions.createBook(book))
    
  }
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(Book);