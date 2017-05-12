import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../static/logo.svg';
import MyAppBar from './MyAppBar';
export const Layout = props => (
   <div className="App">
    
       <MyAppBar history={props.history}/>

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