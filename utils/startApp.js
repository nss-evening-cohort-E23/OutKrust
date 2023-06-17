import domBuilder from '../components/domBuilder';
import logoutButton from '../components/logoutButton';
import renderNavbar from '../components/shared/navbar';
import formLaunchers from '../events/formLaunchers';
import homePageEvents from '../events/homePageEvents';
import navbarEvents from '../events/navbarEvents';
import showHomePage from '../pages/homePage';

const startApp = (user) => {
  domBuilder();
  renderNavbar(user);
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  showHomePage();
  homePageEvents();
  formLaunchers();
  navbarEvents(user);
};

export default startApp;
