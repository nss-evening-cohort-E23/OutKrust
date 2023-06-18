import orderForm from '../components/shared/orderForm';
import paymentForm from '../components/shared/paymentForm';
import itemForm from '../components/shared/itemForm';

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
