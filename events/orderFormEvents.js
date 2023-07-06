import { createOrder, getAllOrders, updateOrder } from '../api/orderData';
import showOrderCards from '../pages/cards';

const orderFormEvents = (user) => {
  document.querySelector('#order-form-container').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('add-order')) {
      const date = new Date();
      const dateTime = date.toLocaleString();
      const payload = {
        name: document.querySelector('#order-name').value,
        customer_phone: document.querySelector('#order-phone').value,
        customer_email: document.querySelector('#order-email').value,
        order_type: document.querySelector('#order-type').value,
        items: [],
        timestamp: dateTime,
        sub_total: 0,
        created_by: { uid: user.uid, display_name: user.displayName },
        is_open: true,
      };
      createOrder(payload)
        .then(({ name }) => {
          const patchPayload = {
            order_number: name
          };
          updateOrder(patchPayload).then(() => {
            getAllOrders().then(showOrderCards);
          });
        });
    } else if (e.target.id.includes('update-order')) {
      const [, orderNumber] = e.target.id.split('--');
      const payload = {
        order_number: orderNumber,
        name: document.querySelector('#order-name').value,
        customer_phone: document.querySelector('#order-phone').value,
        customer_email: document.querySelector('#order-email').value,
        order_type: document.querySelector('#order-type').value
      };
      updateOrder(payload).then(() => {
        getAllOrders().then(showOrderCards);
      });
    }
  });
};

export default orderFormEvents;
