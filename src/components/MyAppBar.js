import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
  import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { List, ListItem } from 'material-ui/List';
import { Link } from 'react-router-dom';
import history from 'history';
injectTapEventPlugin();


const style = {
  title: {
    cursor: 'pointer'
  }
};

class MyAppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
     this.handleToggle = this.handleToggle.bind(this);
     this.handleTitleTouchTap = this.handleTitleTouchTap.bind(this);
    
  }
    handleToggle() {
    this.setState({ open: !this.state.open });
  }
    handleTitleTouchTap() {
    this.props.history.push('/'); // Navigate home

  }
  
  render() {
    return( 
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <div>
         <AppBar
         title={<span style={style.title}>Alex's Books</span>}
         onLeftIconButtonTouchTap={this.handleToggle}
         
         onTitleTouchTap={this.handleTitleTouchTap}/>
      <Drawer docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({ open })}
        >
        <List>
            <ListItem
              containerElement={<Link to="/" />}
              onTouchTap={this.handleToggle}
              primaryText="Home"
            />
            <ListItem
              containerElement={<Link to="/about" />}
              onTouchTap={this.handleToggle}
              primaryText="About"
            />
                 <ListItem
              containerElement={<Link to="/books" />}
              onTouchTap={this.handleToggle}
              primaryText="Books"
            />
            <ListItem
              containerElement={<Link to="/cart" />}
              onTouchTap={this.handleToggle}
              primaryText="Cart"
            />
              <ListItem
              containerElement={<Link to="/blogs" />}
              onTouchTap={this.handleToggle}
              primaryText="Blogs"
            />
       </List>

   </Drawer>
    </div>

 
 </MuiThemeProvider>
 
    )
  }
}
const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);
export default MyAppBar;