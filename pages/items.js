import renderToDom from '../utils/renderToDom';

const showItems = (order) => {
  // object deconstructions
  const { items } = order;
  let itemsHtml = '';
  itemsHtml += `<h1>TOTAL: $${order.sub_total}</h1><div class="d-flex flex-row justify-content-center flex-wrap gap-2">`;
  if (items) {
    items.forEach((item) => {
      itemsHtml += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <h6 class="lang">$${item.price}</h6>
        <hr>
        <div class="d-flex flex-row justify-content-between">
        <i class="fa fa-solid fa-pen" id="edit-item-btn--${order.order_number}--${item.item_id}" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#item-modal"></i>
        <i class="fa fa-solid fa-trash" id="delete-item-btn--${order.order_number}--${item.item_id}" class="btn btn-danger"></i>
        </div>
      </div>
    </div>`;
    });
  }
  itemsHtml += `</div>
  <div class="d-flex flex-row justify-content-between gap-3">
  <a class="card-link new-card-btn" id="add-item-btn--${order.order_number}" data-bs-toggle="modal" data-bs-target="#item-modal">Add Item</a>
  <a class="card-link new-card-btn" id="go-pay-btn--${order.order_number}" data-bs-toggle="modal" data-bs-target="#payment-modal">Go To Payment</a>
  </div>`;
  renderToDom('#home-page', itemsHtml);
};

export default showItems;
