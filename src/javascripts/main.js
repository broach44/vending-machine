import firebase from 'firebase';

import apiKeys from './helpers/apiKeys.json';

import 'bootstrap';
import '../styles/main.scss';

const init = () => {
  console.log(apiKeys.firebaseKeys);
  firebase.initializeApp(apiKeys.firebaseKeys);
  console.log(firebase.apps);
};

init();
