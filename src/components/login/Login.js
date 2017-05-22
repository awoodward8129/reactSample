import React, { Component } from 'react';
import FirebaseUIManager from './firebaseUiManager';

class Login extends Component {
  componentDidMount(){
  FirebaseUIManager();
  }

  render() {

    return (
      <div>
         <div id="firebaseui-auth-container"></div>
         <div id="sign-in-status"></div>
         <div id="sign-in"></div>
         <div id="account-details"></div>
      </div>
    );
  }
}

export default Login;