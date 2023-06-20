import { updateOrder } from '../api/orderData';
import orderCards from '../pages/cards';

const paymentEvents = () => {
  // PAYMENT FORM EVENT LISTENER -  //
  document.querySelector('#homePage').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('payment')) {
      const payload = {
        payment_method: document.querySelector('#payType').value,
        tip_amount: document.querySelector('#tip').value,
        is_open: false
      };
      updateOrder(payload).then(() => {
        orderCards();
      });
    } console.warn('working close order');
  });
};

export default paymentEvents;
