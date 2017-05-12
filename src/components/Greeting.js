import React, { Component } from 'react';
import Link from 'react-router-dom';


class Greeting extends React.Component {
  render() {
    return( 
      <div>
        <h1>Hello, {this.props.name}</h1>
  
      </div>
    )
  }
}
export default Greeting;