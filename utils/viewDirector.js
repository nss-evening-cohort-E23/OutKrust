import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../components/shared/loginButton';
import logoutButton from '../components/shared/logoutButton';
import client from './client';
import startApp from './startApp';

const ViewDirectorBasedOnUserAuthStatus = () => {
  firebase.initializeApp(client);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      startApp(user);
      logoutButton();
    } else {
      // person is NOT logged in
      loginButton();
    }
  });
};

export default ViewDirectorBasedOnUserAuthStatus;
