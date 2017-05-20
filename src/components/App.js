import React, { Component } from 'react';
import { Route, Switch, IndexRoute } from 'react-router';
import { Layout } from './Layout';
import { IndexPage } from './IndexPage';
import logo from '../static/logo.svg';
import '../static/App.css';
import BlogDetailsPage from './blog/BlogDetailsPage';
import BlogPage from './blog/BlogPage';
import blogs from '../data/blogs';
import Book from './book/BookPage';
import CartPage from './cart/CartPage';
import About from './common/About';
import BookDetailsPage from './book/BookDetailsPage'
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import configureStore from '../store/configureStore';
import * as bookActions from '../actions/bookActions';
import BookUpdatePage from './book/BookUpdatePage';
import UserPage from './common/UserPage';
let state = null;
let store = null;
let history =null;
const renderIndex = () => <IndexPage />;
const renderBlogPage = ({match, staticContext}) =>{

  state = store.getState();
 return <BlogPage blogs={state.blogs} />;
};

const renderBlog = ({ match, staticContext }) => {
  const id = match.params.id;
  const blog = blogs.find(current => current.key === id);
  return <BlogDetailsPage blog={blog} />;
};

const renderBook = ({ match, staticContext }) => {
  const id = match.params.id;
   return <BookDetailsPage  history={history} id={id} />;
};

const renderBookUpdate = ({ match, staticContext }) => {
  const id = match.params.id;
  store.dispatch(bookActions.fetchBookById(id));
  state = store.getState();
   return <BookUpdatePage book={state.book} history={history} id={id} />;
};
const renderCart = ({ match, staticContext }) => {
  const cart = state.cart;
  return <CartPage cart={cart} />;
};

class App extends Component {
   constructor(props) {
    super(props);
    state = props.store.getState();
    store= props.store;
    history = props.history;
    props.store.subscribe(() => {
      // When state will be updated(in our case, when items will be fetched), we will update local component state and force component to rerender with new data.
     state = props.store.getState();
    });

  }

  render() {
    return (
      <Layout history={history} store={store}>
      
          <Route exact path="/" render={IndexPage} />
          <Route exact path="/blog/:id" render={renderBlog} />
          <Route exact path="/blogs" render={renderBlogPage} />
          <Route exact path='/books' component={Book} />
          <Route path="/books/:id" component={renderBook} />
          <Route path ="/bookUpdate/:id" component={renderBookUpdate}/>
          <Route exact path="/about" render={About} />
          <Route exact path="/users" component={UserPage} />
          <Route path="/cart" component={renderCart}></Route>
      
      </Layout>
    );
  }
}

export default App;
