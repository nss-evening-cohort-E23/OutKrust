import domBuilder from '../components/domBuilder';
import logoutButton from '../components/logoutButton';
import renderNavbar from '../components/shared/navbar';
import domEvents from '../events/domEvents';
import formLaunchers from '../events/formLaunchers';
import homePageEvents from '../events/homePageEvents';
import navbarEvents from '../events/navbarEvents';
import searchEvents from '../events/searchEvents';
import showHomePage from '../pages/homePage';

const startApp = (user) => {
  domBuilder();
  renderNavbar(user);
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  showHomePage();
  homePageEvents();
  formLaunchers();
  navbarEvents(user);
  searchEvents();
  domEvents();
};

export default startApp;
