import orderForm from '../components/shared/orderForm';

const formLaunchers = () => {
  document.querySelector('#app').addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.id.includes('nav-new-order')) {
      orderForm({});
    }

    if (e.target.id.includes('create-order')) {
      orderForm({});
    }
  });
};

export default formLaunchers;
