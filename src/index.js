import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import firebase from 'firebase';





const firebaseConfig = {
  apiKey: "AIzaSyB1-M9-CjEIycMpW5_vz4L2YRh-6D_Z3Tc",
  authDomain: "pasalavoz-sv.firebaseapp.com",
  databaseURL: "https://pasalavoz-sv.firebaseio.com",
  projectId: "pasalavoz-sv",
  storageBucket: "pasalavoz-sv.appspot.com",
  messagingSenderId: "626221695676",
  appId: "1:626221695676:web:891ad344934c11e53886b9",
  measurementId: "G-CMLC5MKN30"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const RouterApp = (<Router>
  <App />
</Router>)


ReactDOM.render(RouterApp, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
