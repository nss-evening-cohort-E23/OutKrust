import { signOut } from '../utils/auth';

const logoutButton = () => {
  const domString = '<button id="google-auth" class="btn-outkrust">LOGOUT</button>';
  // clears the dom
  document.querySelector('#login-form-container').innerHTML = '';
  document.querySelector('#login-form-container').className = '';
  document.querySelector('#logout-form-container').innerHTML = (domString);
  document.querySelector('#google-auth').addEventListener('click', signOut);
};

export default logoutButton;
