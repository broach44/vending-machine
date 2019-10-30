import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';

import utilities from '../../helpers/utilities';
import googleImage from './googlebutton.png';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const loginButton = () => {
  const domString = `<button class="btn btn-secondary" id="google-auth">
  <img src=${googleImage} />
  </button>`;
  utilities.printToDom('auth', domString);
  $('#google-auth').click(signMeIn);
};

export default { loginButton };
