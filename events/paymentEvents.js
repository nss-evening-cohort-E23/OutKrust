import { getAllOrders, getSingleOrder, updateOrder } from '../api/orderData';
import showOrderCards from '../pages/cards';

const paymentEvents = (user) => {
  // PAYMENT FORM EVENT LISTENER -  //
  document.querySelector('#payment-form-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('payment')) {
      const [, orderNumber] = e.target.id.split('--');
      getSingleOrder(orderNumber).then((order) => {
        const totalPrice = order.sub_total + +(document.querySelector('#tip').value);
        const payload = {
          order_number: orderNumber,
          payment_method: document.querySelector('#pay-type').value,
          tip_amount: document.querySelector('#tip').value,
          total_price: totalPrice,
          closed_by: { uid: user.uid, display_name: user.displayName },
          is_open: false
        };

        updateOrder(payload).then(() => {
          getAllOrders().then(showOrderCards);
        });
      });
    }
  });
};

export default paymentEvents;
