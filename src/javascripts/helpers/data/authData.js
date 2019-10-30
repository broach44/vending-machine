import firebase from 'firebase/app';
import 'firebase/auth';
import $ from 'jquery';
// any additional functions that we need to write to handle functions

const authDiv = $('#auth');
const stockDiv = $('#stock');
const logoutNav = $('#navbar-button-logout');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // someone is logged in - should not see auth component
      stockDiv.removeClass('hide');
      logoutNav.removeClass('hide');
      authDiv.addClass('hide');
    } else {
      // nobody logged in SHOW auth component
      stockDiv.addClass('hide');
      logoutNav.addClass('hide');
      authDiv.removeClass('hide');
    }
  });
};

export default { checkLoginStatus };
