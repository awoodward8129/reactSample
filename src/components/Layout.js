import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../static/logo.svg';

export const Layout = props => (
   <div className="App">
       <div className="App-header">
       <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
            <div>
                Welcome to the Blog
            </div>
        </Link>
       </div>
    <div className="container">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Scotch Books</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/books">Book</Link></li>
              <li><Link to="/cart">Cart</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <div >{props.children}</div>
    <footer>
      <p>
        This is a demo app to showcase <strong>universal Javascript</strong>
        with <strong>React</strong> and <strong>Express</strong>.
      </p>
    </footer>
  </div>
);

export default Layout;