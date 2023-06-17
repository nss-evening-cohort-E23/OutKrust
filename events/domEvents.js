import orderCards from '../pages/cards';
import {
  getSingleOrder,
  deleteOrder,
  getAllOrders,
  updateOrder,
} from '../api/orderData';

function domEvents(user) {
  document.querySelector('#cards').addEventListener('click', (e) => {
    if (e.target.id.includes('update-entry')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then((entry) => updateOrder(entry));
    }

    if (e.target.id.includes('delete-entry')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Do you want to delete this order?')) {
        console.warn('DELETE ORDER', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteOrder(firebaseKey).then(() => {
          getAllOrders(user.uid).then(orderCards);
        });
      }
    }
    if (e.target.id.includes('edit-entry')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleOrder(firebaseKey).then((entryObj) => updateOrder(entryObj));
    }
  });
}

export default domEvents;
