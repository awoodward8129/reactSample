import React from 'react';
import { Link } from 'react-router-dom';

const BookDetails = ({book, addToCart, deleteBook}) => {
    return (
      <div className="media">
        <div className="media-left">
          <a href="#">
            <img className="media-object" src="http://placehold.it/200x280" alt="Placehold" />
          </a>
        </div>
        <div className="media-body">
          <h4 className="media-heading">{book.title}</h4>
          <ul>
            <li><stron>Author: </stron> {book.author}</li>
            <li><stron>Price: </stron> ${book.price}</li>
            <li><stron>Year: </stron> {book.year}</li>
            <br/>
            <button className="btn btn-primary" onClick={e => addToCart(book)}>Buy</button>
            <button className="btn btn-warning" onClick={e => deleteBook(book)}>Delete</button>
            <Link key={book.id} to={`/bookUpdate/${book.id}`}>Update</Link>
          </ul>
        </div>
      </div>
    );
};


export default BookDetails;