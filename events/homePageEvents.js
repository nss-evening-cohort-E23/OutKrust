import { getAllOrders } from '../api/orderData';
import showOrderCards from '../pages/cards';
import { showRevenuePage } from '../pages/revenue';

const homePageEvents = () => {
  document.querySelector('#view-orders').addEventListener('click', () => {
    getAllOrders().then(showOrderCards);
    // view orders click event listener
  });

  document.querySelector('#view-revenue').addEventListener('click', () => {
    // view revenue click event listener
    showRevenuePage();
  });
};

export default homePageEvents;
