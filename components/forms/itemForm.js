import renderToDom from '../../utils/renderToDom';
import itemList from '../shared/itemList';

const showItemForm = (order, item = {}) => {
  let domString = `
    <form id="${item.item_id ? `update-item--${order.order_number}--${item.item_id}` : `add-item--${order.order_number}`}" class="mb-4">
    `;
  if (!item.item_id) {
    domString += `
      <div class="form-group" id="select-item">
      </div>
      <div class="modal-footer">
        <button type="submit" class="form-btn form-btn-outkrust btn-outkrust" data-bs-dismiss="modal">Submit</button>
      </div>
      `;
    domString += '</form>';
    renderToDom('#item-form-container', domString);
    itemList(order.items);
  } else {
    domString += `
      <div class="form-group">
        <label for="item-name">Name</label>
        <input type="text" class="form-control" id="item-name" value="${item.name || ''}" />
      </div>
      <div class="form-group">
        <label for="item-price">Price</label>
        <input type="text" pattern="\\d*(\\.\\d{2})?" class="form-control" id="item-price" value="${item.price || ''}" />
      </div>
      <div class="modal-footer">
        <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>
      </div>`;
    domString += '</form>';
    renderToDom('#item-form-container', domString);
  }
};

export default showItemForm;
