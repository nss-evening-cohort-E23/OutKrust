import domBuilder from '../components/domBuilder';
import renderNavbar from '../components/shared/navbar';
import home from '../pages/homePage';

const startApp = () => {
  domBuilder();
  renderNavbar();
  home();
};

export default startApp;
