import React, { Component } from 'react';
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
import UserPage from './common/UserPage';
import RaisedButton from 'material-ui/RaisedButton';


injectTapEventPlugin();
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

const style = {
  title: {
    cursor: 'pointer'
  }
};
let currentValue, store, user

class MyAppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    store = props.store;
    this.handleToggle = this.handleToggle.bind(this);
    this.handleTitleTouchTap = this.handleTitleTouchTap.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount(){
  store.subscribe(this.handleChange)
  }
  handleToggle() {
    this.setState({ open: !this.state.open });
  }
  handleTitleTouchTap() {
    this.props.history.push('/'); // Navigate home

  }
   handleChange() {
  let previousValue = currentValue
  currentValue = store.getState();
  currentValue.user.email ? this.setState({logged: true}) :  this.setState({logged: false});

  

  if (previousValue !== currentValue) {
    console.log('Some deep nested property changed from', previousValue, 'to', currentValue)
  }
}


  render() {
    return (

      <div>
        <AppBar
          title={<span style={style.title}>Alex's Books</span>}
          onLeftIconButtonTouchTap={this.handleToggle}

          onTitleTouchTap={this.handleTitleTouchTap}

          iconElementRight={this.state.logged ? <Logged/> : <RaisedButton label="Sign In" containerElement={<Link to="/users" />} />} />
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

    )
  }
}


export default MyAppBar;