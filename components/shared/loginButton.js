import { signIn } from '../../utils/auth';
import logo from '../../styles/logo.png';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = `
  <div class="d-flex flex-column justify-content-center align-items-center">
    <img src=${logo} class="login-logo" alt="OutKrust Pizza and Wangs Logo">
    <button id="google-auth" class="btn-outkrust">LOGIN</button>
  </div>`;
  document.querySelector('#login-form-container').className = 'flex-fill';
  document.querySelector('#login-form-container').innerHTML = domString;
  // Clearing the app
  document.querySelector('#app').innerHTML = '';
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
