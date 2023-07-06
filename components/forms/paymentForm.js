import renderToDom from '../../utils/renderToDom';

const showPaymentForm = (order = {}) => {
  const domString = `
  <form id="payment--${order.order_number}" class="mb-4">
  
    <div class="form-group pay-form">
    <label for="pay-type">Payment Type</label>
    <select id="pay-type" name="paymentOption" value="${order.payment_method || ''}" required>
      <option value="Credit Card" ${order.payment_method === 'Credit Card' ? 'selected' : ''}>Credit Card</option>
      <option value="Cash" ${order.payment_method === 'Cash' ? 'selected' : ''}>Cash</option>
      <option value="Mobile" ${order.payment_method === 'Mobile' ? 'selected' : ''}>Mobile</option>
    </select>
    </div>

    <div class="form-group">
      <label for="tip">Tip Amount</label>
      <input type="text" class="form-control" id="tip" placeholder="0" value="${order.tip_amount || ''}" required>
    </div>
    
    <div class="modal-footer">
      <button type="submit" class="form-btn form-btn-outkrust btn-outkrust" id="close-order" data-bs-dismiss="modal">Close Order</button>
    </div>
  </form>
  `;
  renderToDom('#payment-form-container', domString);
};

export default showPaymentForm;
