import orderForm from '../components/forms/orderForm';
import paymentForm from '../components/forms/paymentForm';
import { itemForm } from '../components/forms/itemForm';

const formLaunchers = () => {
  document.querySelector('#app').addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.id.includes('nav-new-order')) {
      orderForm({});
    }

    if (e.target.id.includes('create-order')) {
      orderForm({});
    }
    if (e.target.id.includes('addItemBtn')) {
      itemForm({});
    }
  });
  document.querySelector('#detailItemBtns').addEventListener('click', (e) => {
    if (e.target.id.includes('goPayBtn')) {
      paymentForm({});
      console.warn('working');
    }
  });
};

export default formLaunchers;
