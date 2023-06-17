import { getAllItems, updateItem } from '../api/itemData';
import showItems from '../pages/items';

const paymentEvents = () => {
  // PAYMENT FORM EVENT LISTENER -  //
  document.querySelector('#paymentFormDiv').addEventListener('submit', (e) => {
    e.preventDefault();
    const payload = {
      payment_method: document.querySelector('#payType').value,
      tip_amount: document.querySelector('#tip').value,
      is_open: false
    };
    updateItem(payload).then(() => {
      getAllItems().then(showItems);
    });
  });
};

export default paymentEvents;
