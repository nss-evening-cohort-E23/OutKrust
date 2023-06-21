import { getAllOrders } from '../api/orderData';
import showOrderCards from '../pages/cards';
import showHomePage from '../pages/homePage';
import { showRevenuePage } from '../pages/revenue';
import renderToDom from '../utils/renderToDom';

const navbarEvents = (user) => {
  document.querySelector('#navbar').addEventListener('click', (e) => {
    if (e.target.id.includes('nav-home')) {
      showHomePage();
    }

    if (e.target.id.includes('nav-revenue')) {
      showRevenuePage();
    }

    if (e.target.id.includes('nav-menu')) {
      console.warn('This will render items list');
    }

    if (e.target.id.includes('nav-orders')) {
      getAllOrders().then(showOrderCards);
    }

    if (e.target.id.includes('nav-user')) {
      const domstring = `
      <div class="employee-page">
        <h1>Congratulations to Triple Platinum Employee of the Decade</h1>
        <h2>${user.displayName}</h2>
      </div>`;
      renderToDom('#home-page', domstring);
    }
  });
};

export default navbarEvents;
