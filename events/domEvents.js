import orderCards from '../pages/cards';
import {
  getSingleOrder,
  deleteOrder,
  getAllOrders,
  updateOrder,
} from '../api/orderData';
import showItems from '../pages/items';

const domEvents = (user) => {
  document.querySelector('#homePage').addEventListener('click', (e) => {
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
  // item details page event //
  // document.querySelector('#homePage').addEventListener('click', (e) => {
  //   if (e.target.id.includes('detail-entry--')) {
  //     const [, firebaseKey] = e.target.id.split('--');
  //     getSingleOrder(firebaseKey)
  //       .then((obj) => {
  //         const newArray = [];
  //         obj.items.forEach((item) => {
  //           newArray.push(item);
  //         });
  //         return newArray;
  //       })
  //       .then(showItems);
  //   }
  // });
  document.querySelector('#homePage').addEventListener('click', (e) => {
    if (e.target.id.includes('detail-entry--')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then(showItems);
    }
  });
};

export default domEvents;
