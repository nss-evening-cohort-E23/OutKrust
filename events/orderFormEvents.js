import { createOrder, getSingleOrder, updateOrder } from '../api/orderData';
import { addItems } from '../components/shared/itemForm';

const orderFormEvents = (user) => {
  document.querySelector('#app').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submitOrder')) {
      console.warn('clicked');
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
      createOrder(payload)
        .then(({ name }) => {
          const patchPayload = {
            order_number: name
          };
          updateOrder(patchPayload);
          getSingleOrder(name);
        })
        .then(addItems);
    }
  });
};

export default orderFormEvents;
