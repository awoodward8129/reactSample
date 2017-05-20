import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../static/logo.svg';
import MyAppBar from './MyAppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Footer from './footer/Footer';
export const Layout = props => (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
   <div className="App">
       <MyAppBar history={props.history} store={props.store} className='App-header'  />
    <div className="App-content">{props.children}</div>
    <br/>
    <footer className="App-content">
      <Footer history={props.history}  />
    </footer>
  </div>
   </MuiThemeProvider>
);

export default Layout;