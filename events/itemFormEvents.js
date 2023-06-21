import { getSingleItem } from '../api/itemData';
import { getSingleOrder, updateOrder } from '../api/orderData';
import showItems from '../pages/items';

const orderItemFormEvents = () => {
  // ITEM FORM EVENT LISTENER -  //
  document.querySelector('#item-form-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('add-item')) {
      const [, orderNumber] = e.target.id.split('--');
      getSingleOrder(orderNumber).then((order) => {
        const itemId = document.querySelector('#menu-item').value;
        const { items } = order;
        getSingleItem(itemId).then((item) => {
          items.push(item);
          const payload = {
            order_number: order.order_number,
            sub_total: order.sub_total + +item.price,
            items
          };
          updateOrder(payload).then(() => {
            getSingleOrder(orderNumber).then(showItems);
          });
        });
      });
    } else if (e.target.id.includes('update-item')) {
      console.warn('edit button clicked');
      const [, orderNumber, itemId] = e.target.id.split('--');
      getSingleOrder(orderNumber).then((order) => {
        const { items } = order;
        const itemIndex = items.findIndex((i) => i.item_id === itemId);
        const originalPrice = items[itemIndex].price;
        if (itemIndex !== -1) {
          items[itemIndex].name = document.querySelector('#item-name').value;
          items[itemIndex].price = document.querySelector('#item-price').value;
        }

        const payload = {
          order_number: order.order_number,
          sub_total: order.sub_total - originalPrice + +(items[itemIndex].price),
          items
        };
        updateOrder(payload).then(() => {
          getSingleOrder(orderNumber).then(showItems);
        });
      });
    }
  });
};

export default orderItemFormEvents;
