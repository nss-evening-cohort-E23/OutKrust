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
          <a href="#" class="card-link" id="detail-entry--${order.order_number}" class="btn btn-success">Detail</a>
          <a href="#" class="card-link" id="update-entry--${order.order_number}" class="btn btn-warning">Edit</a>
          <a href="#" class="card-link" id="delete-entry--${order.order_number}" class="btn btn-danger">Delete</a>
        </div>
      </div>
    `;
  });

  const containerStyle = `
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  `;
  const containerElement = document.createElement('div');
  containerElement.setAttribute('style', containerStyle);
  containerElement.innerHTML = domString;
  renderToDom('#homePage', containerElement.outerHTML);
};

export default orderCards;
