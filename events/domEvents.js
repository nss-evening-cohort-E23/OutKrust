import showOrderCards from '../pages/cards';
import {
  getSingleOrder,
  deleteOrder,
  getAllOrders,
  updateOrder,
} from '../api/orderData';
import showItems from '../pages/items';

// import paymentForm from '../components/shared/paymentForm';

const domEvents = () => {
  document.querySelector('#home-page').addEventListener('click', (e) => {
    if (e.target.id.includes('order-detail--')) {
      const [, orderNumber] = e.target.id.split('--');
      getSingleOrder(orderNumber).then((order) => {
        showItems(order);
      });
    } else if (e.target.id.includes('order-delete')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Do you want to delete this order?')) {
        const [, orderNumber] = e.target.id.split('--');
        deleteOrder(orderNumber).then(() => {
          getAllOrders().then(showOrderCards);
        });
      }
    } else if (e.target.id.includes('delete-item-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Do you want to delete this order?')) {
        const [, orderNumber, itemId] = e.target.id.split('--');
        getSingleOrder(orderNumber).then((order) => {
          const { items } = order;
          const itemIndex = items.findIndex((i) => i.item_id === itemId);
          const itemPrice = items[itemIndex].price;
          items.splice(itemIndex, 1);
          const payload = {
            order_number: order.order_number,
            sub_total: order.sub_total - itemPrice,
            items
          };
          updateOrder(payload).then(() => {
            getSingleOrder(orderNumber).then(showItems);
          });
        });
      }
    }
  });
};

export default domEvents;
