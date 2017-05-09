import React, { Component } from 'react';
import { Route, Switch, IndexRoute } from 'react-router';
import { Layout } from './Layout';
import { IndexPage } from './IndexPage';
import logo from '../static/logo.svg';
import '../static/App.css';
import Greeting from './Greeting';
import BlogPage from './BlogPage';
import blogs from '../data/blogs';
import Book from './book/BookPage';
import About from './common/About';
import BookDetailsPage from './book/BookDetailsPage'
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import configureStore from '../store/configureStore';
import * as bookActions from '../actions/bookActions';

const store = configureStore();
const books = store.dispatch(bookActions.fetchBooks());

const renderIndex = () => <IndexPage blogs={blogs} />;

const renderBlog = ({ match, staticContext }) => {
  const id = match.params.id;
  const blog = blogs.find(current => current.id === id);
  return <BlogPage blog={blog} />;
};
const renderBook = ({ match, staticContext }) => {
  const id = match.params.id;
  const state = store.getState();
  const book = state.books.find(current => current.id === id);
  return <BookDetailsPage book={book} />;
};


class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" render={renderIndex} />
          <Route exact path="/blog/:id" render={renderBlog} />
          <Route exact path='/books' component={Book} />
          <Route path="/books/:id" render={renderBook} />
          <Route exact path="/about" render={About} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
