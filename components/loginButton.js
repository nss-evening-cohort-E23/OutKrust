import { signIn } from '../utils/auth';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = `
  <div class="d-flex flex-column justify-content-center align-items-center">
    <p id="login-text">Welcome to OutKrust</p>
    <button id="google-auth" class="btn-outkrust">LOGIN</button>
  </div>`;
  document.querySelector('#login-form-container').className = 'flex-fill';
  document.querySelector('#login-form-container').innerHTML = domString;
  // Clearing the app
  document.querySelector('#app').innerHTML = '';
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
