// import { getAllItems } from '../api/itemData';
import renderToDom from '../utils/renderToDom';

const showItems = (array) => {
  let cardString = '';
  array.forEach((item) => {
    cardString += `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${item.items.name}</h5>
      <h6 class="lang">${item.items.price}</h6>
        <hr>
        <button id="editItemBtn--${item.items.item_id}" class="btn btn-info">edit</button>
        <button id="deleteItemBtn--${item.items.item_id}" class="btn btn-danger">delete</button>
    </div>
  </div>`;
  });
  renderToDom('#homePage', cardString);

  const btnString = `
  <button class="new-card-btn" id="addItemBtn">Add Item</button> <button class="new-card-btn" id="goPayBtn" data-bs-toggle="modal" data-bs-target="#payment-modal">Go To Payment</button>`;
  renderToDom('#detailItemBtns', btnString);

  // const itemSum = (items) => {
  //   let totalItems = 0;
  //   items.forEach((item) => {
  //     totalItems += item.price;
  //   }); getAllItems().then(totalItems);
  // };
  const totalString = '<h1>TOTAL:</h1>';
  renderToDom('#itemTotals', totalString);
};

export default showItems;
