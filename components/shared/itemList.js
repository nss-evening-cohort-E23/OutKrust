import renderToDom from '../../utils/renderToDom';

const itemList = (array) => {
  let itemListString = '';
  array.forEach((item) => {
    itemListString += `
    <option id="menu-${item.firebaseKey}" value="${item.firebaseKey}" name="menu-${item.firebaseKey}">${item.itemName} - ${item.itemPrice}</option>`;
  });
  renderToDom('#menu-item', itemListString);
};

export default itemList;
