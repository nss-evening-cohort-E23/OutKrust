import { getAllItems } from '../../api/itemData';
import renderToDom from '../../utils/renderToDom';

const itemList = (itemsToExclude) => {
  // it returns a dropdown with items that are not already added to the order
  let itemSelect = `<label for="menu-item">Item</label>
    <select class="form-control" id="menu-item" required>
    <option value="">Choose Item</option>`;
  getAllItems().then((items) => {
    items.forEach((item) => {
      const itemExists = itemsToExclude && itemsToExclude.find((ie) => ie.item_id === item.item_id);

      if (!itemExists) {
        itemSelect += `
            <option class="item-option" value="${item.item_id}">
                ${item.name}
            </option>`;
      }
    });
    itemSelect += '</select>';
    renderToDom('#select-item', itemSelect);
  });
};

export default itemList;
