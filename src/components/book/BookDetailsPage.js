// ./src/components/book/BookDetailsPage.js
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as bookActions from '../../actions/bookActions';
import { Link } from 'react-router-dom';

export const BookDetailsPage = ({ book }) => {
    return (
        <div>
            <h1>Book Details Page</h1>
            <div className="media">
                <div className="media-left">
                    <a href="#">
                        <img className="media-object" src="http://placehold.it/200/450" alt="Placehold" />
                    </a>
                </div>
                <div className="media-body">
                    <h4 className="media-heading">{book.title}</h4>
                    <ul>
                        <li><stron>Author: </stron> {book.author}</li>
                        <li><stron>Price: </stron> {book.price}</li>
                        <li><stron>Year: </stron> {book.year}</li>
                        <br />
                        <button className="btn btn-primary">Buy</button>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default BookDetailsPage;