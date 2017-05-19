import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../static/logo.svg';
import MyAppBar from './MyAppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
export const Layout = props => (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
   <div className="App">
       <MyAppBar history={props.history} store={props.store}/>
      
    <div className="App-content">{props.children}</div>
    <footer >
      <p>
        This is a demo app to showcase <strong>universal Javascript</strong>
        with <strong>React</strong> and <strong>Express</strong>.
      </p>
    </footer>
  </div>
   </MuiThemeProvider>
);

export default Layout;