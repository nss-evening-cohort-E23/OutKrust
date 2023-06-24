import renderToDom from '../utils/renderToDom';
import logo from '../styles/logo.png';

const showOrderCards = (orders) => {
  let domString = '<div id="order-card-container" class="d-flex flex-row justify-content-center flex-wrap gap-2">';
  orders.forEach((order) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="logo-div-main">
        <img src=${logo} class="nav-logo" alt="OutKrust Pizza and Wangs Logo">
      </div>
      <div class="card-body d-flex flex-column">
        <h5 class="card-name">${order.name}</h5>
        <h6 class="card-phone">${order.customer_phone}</h6>
        <h7 class="card-email">${order.customer_email}</h7>
        <h7 class="card-email">${order.is_open ? 'Open' : 'Closed'}</h7>
        <h8 class="card-order-type">${order.order_type}</h8>
        <div class="d-flex flex-row justify-content-between">
          <div>
          <i class="fa fa-solid fa-info-circle" id="order-detail--${order.order_number}"></i>
            <i class="fa fa-solid fa-pen" data-bs-toggle="modal" data-bs-target="#order-modal" id="order-update--${order.order_number}" data-bs-toggle="modal" data-bs-target="#order-modal"></i>
          </div>
          <i class="fa fa-solid fa-trash" id="order-delete--${order.order_number}"></i>
        </div>
      </div>
    </div>
    `;
  });
  domString += '</div>';
  renderToDom('#home-page', domString);
};

export default showOrderCards;
