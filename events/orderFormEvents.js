import { createOrder, updateOrder } from '../api/orderData';

const orderFormEvents = (user) => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submitOrder')) {
      const date = new Date();
      const dateTime = date.toLocaleString();
      const payload = {
        name: document.querySelector('#order-name').value,
        customer_phone: document.querySelector('#order-phone').value,
        customer_email: document.querySelector('#order_email').value,
        order_type: document.querySelector('#order-type').value,
        timestamp: dateTime,
        created_by: user.displayName,
        isOpen: true,
      };
      createOrder(payload).then(({ name }) => {
        const patchPayload = {
          order_number: name
        };
        updateOrder(patchPayload);
      });
    }
  });
};

export default orderFormEvents;
