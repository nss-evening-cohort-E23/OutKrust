import renderToDom from '../../utils/renderToDom';

const orderForm = (obj = {}) => {
  const domString = `

<form id="order-form" class="mb-4">
  <div class="form-group">
    <label for="order-name">Order Name</label>
    <input type="text" class="form-control" id="order-name" name="order-name" value="${obj.name || ''}" required>
  </div>
  <div class="form-group">
    <label for="order-phone">Customer Phone</label>
    <input type="text" class="form-control" id="order-phone" name="order-phone" value="${obj.customer_phone || ''}" required>
  </div>
  <div class="form-group">
    <label for="order-email">Customer Email</label>
    <input type="text" class="form-control" id="order-email" name="order-email" value="${obj.customer_email || ''}" required>
  </div>
  <div class="form-group">
    <label for="order-type">Order Type</label>
    <select id="order-type" name="order-type" required>
      <option value="Dine-In" name="dine-in" ${obj.order_type === 'Dine-in' ? 'selected' : ''}>Dine-In</option>
      <option value="Pick-Up" name="pick-up" ${obj.order_type === 'Pick-up' ? 'selected' : ''}>Pick-Up</option>
      <option value="Delivery" name="delivery" ${obj.order_type === 'Delivery' ? 'selected' : ''}>Delivery</option>
    </select>
    <button type="submit" class="form-btn" id="submitOrder">Submit Order</button>
  </div>
  </form>`;
  renderToDom('#orderFormDiv', domString);
};

export default orderForm;
