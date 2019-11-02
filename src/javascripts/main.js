import firebase from 'firebase';

import auth from './components/Auth/auth';
import authData from './helpers/data/authData';
import myNavbar from './components/MyNavbar/myNavbar';
import machine from './components/Machine/machine';

import apiKeys from './helpers/apiKeys.json';

import 'bootstrap';
import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  authData.checkLoginStatus();
  myNavbar.logoutEvent();
  auth.loginButton();
  machine.buildTheMachine();
};

init();
