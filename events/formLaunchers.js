import showOrderForm from '../components/forms/orderForm';
import showPaymentForm from '../components/forms/paymentForm';
import showItemForm from '../components/forms/itemForm';
import { getSingleOrder } from '../api/orderData';

const formLaunchers = () => {
  document.querySelector('#app').addEventListener('click', (e) => {
    if (e.target.id.includes('nav-new-order')) {
      showOrderForm();
    } else if (e.target.id.includes('create-order')) {
      showOrderForm();
    } else if (e.target.id.includes('order-update')) {
      const [, orderNumber] = e.target.id.split('--');
      getSingleOrder(orderNumber).then((order) => showOrderForm(order));
    } else if (e.target.id.includes('add-item-btn')) {
      const [, orderNumber] = e.target.id.split('--');
      getSingleOrder(orderNumber).then((order) => showItemForm(order));
    } else if (e.target.id.includes('edit-item-btn')) {
      const [, orderNumber, itemId] = e.target.id.split('--');
      getSingleOrder(orderNumber).then((order) => {
        const orderItem = order.items.find((item) => item.item_id === itemId);
        showItemForm(order, orderItem);
      });
    } else if (e.target.id.includes('go-pay-btn')) {
      const [, orderNumber] = e.target.id.split('--');
      getSingleOrder(orderNumber).then((order) => showPaymentForm(order));
    }
  });
};

export default formLaunchers;
