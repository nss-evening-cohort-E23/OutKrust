import { getUser, patchUser, postUser } from '../api/userData';
import domBuilder from '../components/domBuilder';
import logoutButton from '../components/logoutButton';
import renderNavbar from '../components/shared/navbar';
import domEvents from '../events/domEvents';
import formLaunchers from '../events/formLaunchers';
import orderItemFormEvents from '../events/itemFormEvents';
import navbarEvents from '../events/navbarEvents';
import orderFormEvents from '../events/orderFormEvents';
import paymentEvents from '../events/paymentEvents';
import searchEvents from '../events/searchEvents';
import showHomePage from '../pages/homePage';

const startApp = (user) => {
  getUser(user.uid).then((dbUser) => {
    const currentDate = (new Date()).toISOString();
    if (Object.keys(dbUser).length === 0) {
      // if the object is empty create a new user with following fields
      const userPayload = {
        uid: user.uid,
        display_name: user.displayName,
        role: 'User',
        last_login_timestamp: currentDate
      };
      postUser(userPayload).then(({ name }) => {
        const patchPayload = { user_id: name };
        patchUser(patchPayload);
      });
    } else {
      // if not a new user, just patch the timestamp
      const patchPayload = {
        user_id: dbUser.user_id,
        last_login_timestamp: currentDate
      };
      patchUser(patchPayload);
    }
  });

  domBuilder();
  domEvents();
  renderNavbar(user);
  navbarEvents(user);
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  showHomePage();
  formLaunchers();
  searchEvents();
  orderFormEvents(user);
  orderItemFormEvents();
  paymentEvents(user);
};

export default startApp;
