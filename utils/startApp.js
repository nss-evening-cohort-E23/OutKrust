import domBuilder from '../components/domBuilder';
import logoutButton from '../components/logoutButton';
import renderNavbar from '../components/shared/navbar';
import formLaunchers from '../events/formLaunchers';
import homePageEvents from '../events/homePageEvents';
import showHomePage from '../pages/homePage';

const startApp = (user) => {
  domBuilder();
  renderNavbar(user);
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  showHomePage();
  homePageEvents();
  formLaunchers();
};

export default startApp;
