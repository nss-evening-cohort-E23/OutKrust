import renderToDom from '../../utils/renderToDom';

const showOrderForm = (order = {}) => {
  const domString = `
// 
<form id="${order.order_number ? `update-order--${order.order_number}` : 'add-order'}" class="mb-4">
  <div class="form-group">
    <label for="order-name">Order Name</label>
    <input type="text" class="form-control" id="order-name" name="order-name" value="${order.name || ''}" required />
  </div>
  <div class="form-group">
    <label for="order-phone">Customer Phone</label>
    <input type="text" class="form-control" id="order-phone" name="order-phone" value="${order.customer_phone || ''}" required />
  </div>
  <div class="form-group">
    <label for="order-email">Customer Email</label>
    <input type="text" class="form-control" id="order-email" name="order-email" value="${order.customer_email || ''}" required />
  </div>
  <div class="form-group">
    <label for="order-type">Order Type</label>
    <select id="order-type" name="order-type" required>
      <option value="Call-In" name="call-in" ${order.order_type === 'Call-In' ? 'selected' : ''}>Call-In</option>
      <option value="Walk-In" name="walk-in" ${order.order_type === 'Walk-In' ? 'selected' : ''}>Walk-In</option>
    </select>
  </div>
  <div class="modal-footer">
    <button type="submit" class="form-btn" id="submitOrder" data-bs-dismiss="modal">Submit Order</button>
  </div>
</form>`;
  renderToDom('#order-form-container', domString);
};

export default showOrderForm;
