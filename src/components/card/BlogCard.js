import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import Avatar from 'material-ui/Avatar';
import nature from '../images/nature-forest-industry-rails.jpg'
import avatar from '../images/ok-128.jpg'
const style = {align:'left'};
import Link from 'react-router'
export default class CardExampleControlled extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };

  render() {
    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>

        <CardMedia
         
          overlay={<CardTitle title={this.props.title} subtitle="Overlay subtitle" />}
        >
   <img src='https://lh3.googleusercontent.com/k-h-DvXI0BC5BT3D_zXdHrRS7TwPQr0Qk45MtdRN2oVLdtETBm_W_FW6KcKhEUqOpzXRS-Fpl91iKoFpbRVZSvx7HA-QqWnzrv65Ol_3rX-rNIAZ0RV-BZB7UDpn-6S_O4oamQ'/>
        </CardMedia>
      
        <CardText >
          
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>
          <FlatButton label="Go to this post" onTouchTap={this.handleExpand} />
          <FlatButton  onTouchTap={this.handleReduce} >  </FlatButton>
         
        </CardActions>
      </Card>
    );
  }
}