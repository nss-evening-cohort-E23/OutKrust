import renderToDom from '../../utils/renderToDom';

const orderForm = (obj = {}) => {
  const domString = `

<form id="order" class="mb-4">
  <div class="form-group">
    <label for="order-name">Order Name</label>
    <input type="text" class="form-control" id="order-name" name="order-name" value="${obj.orderName || ''}required>
  </div>
  <div class="form-group">
    <label for="order-phone">Customer Phone</label>
    <input type="text" class="form-control" id="order-phone" name="order-phone" value="${obj.orderPhone || ''} required>
  </div>
  <div class="form-group">
    <label for="order-email">Customer Email</label>
    <input type="text" class="form-control" id="order-email" name="order-email" value="${obj.orderEmail || ''} required>
  </div>
  <div class="form-group">
    <label for="order-type">Order Type</label>
    <select id="order-type" name="order-type" required>
      <option value="Dine-In" name="dine-in" ${obj.orderType === 'Dine-in' ? 'selected' : ''}>Dine-In</option>
      <option value="Pick-Up" name="pick-up" ${obj.orderType === 'Pick-up' ? 'selected' : ''}>Pick-Up</option></option>
      <option value="Delivery" name="delivery" ${obj.orderType === 'Delivery' ? 'selected' : ''}>Delivery</option>
    </select>
  </div>
  <button type="submit" class="form-btn" id="submitOrder">Close Order</button>
</form>`;
  renderToDom('#homePage', domString);
};

export default orderForm;
