  import firebase from 'firebase'
  var config = {
    apiKey: "AIzaSyCaoZkH2WLfVNu-f6-EPqaTfmd5jpCSnzE",
    authDomain: "firstreactproject-4f176.firebaseapp.com",
    databaseURL: "https://firstreactproject-4f176.firebaseio.com",
    projectId: "firstreactproject-4f176",
    storageBucket: "firstreactproject-4f176.appspot.com",
    messagingSenderId: "693568818332"
  };
  firebase.initializeApp(config);

  const database = firebase;

export default database;