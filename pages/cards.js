import renderToDom from '../utils/renderToDom';

const orderCards = (array) => {
  let domString = '';
  array.forEach((order) => {
    console.warn('order', order);
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-name">${order.name}</h5>
        <h6 class="card-phone">${order.customer_phone}</h6>
        <h7 class="card-email">${order.customer_email}</h7>
        <h8 class="card-order-type">${order.order_type}</h8>
        <a href="#" class="card-link" id="detail-entry--${order.order_number}">Detail</a>
        <a href="#" class="card-link" id="update-entry--${order.order_number}">Edit</a>
        <a href="#" class="card-link" id="delete-entry--${order.order_number}">Delete</a>
      </div>
    </div>
  `;
  });
  renderToDom('#homePage', domString);
};

export default orderCards;
