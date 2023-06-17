import { getAllOrders } from '../api/orderData';
import orderCards from '../pages/cards';
import { showRevenuePage } from '../pages/revenue';

const homePageEvents = () => {
  document.querySelector('#view-orders').addEventListener('click', () => {
    getAllOrders().then(orderCards);
    // view orders click event listener
  });

  document.querySelector('#create-order').addEventListener('click', () => {
    // create order click event listener
  });

  document.querySelector('#view-revenue').addEventListener('click', () => {
    // view revenue click event listener
    showRevenuePage();
  });
};

export default homePageEvents;
