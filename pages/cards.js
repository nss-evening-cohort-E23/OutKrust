import renderToDom from '../utils/renderToDOM';

const showCards = (array) => {

  let domString = '';
  array.forEach((order) => {
    console.warn('order', order);
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-name">${order.orderName}</h5>
        <h6 class="card-phone">${order.customerPhone}</h6>
        <h7 class="card-email">${order.customerEmail}</h7>
        <h8 class="card-order-type">${order.orderType}</h8>
        <a href="#" class="card-link" id="detail-entry--${order.firebaseKey}">Create/Edit Order</a>
      </div>
    </div>
  `;
  });
  renderToDom('#cards', domString);
};

export default showCards;
