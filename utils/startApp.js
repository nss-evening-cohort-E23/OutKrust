import domBuilder from '../components/domBuilder';
import renderNavbar from '../components/shared/navbar';

const startApp = (user) => {
  domBuilder();
  renderNavbar(user);
};

export default startApp;
