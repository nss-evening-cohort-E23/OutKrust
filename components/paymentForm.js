import renderToDom from '../utils/renderToDom';
// probably need to add a clearDom function //

const paymentForm = (obj = {}) => {
  const domString = `
  <form id="payment" class="mb-4">
  
  <div class="form-group">
  <label for="payType">Payment Type</label>
  <select id="payType" name="paymentOption" value="${obj.paymentMethod || ''}" required>
    <option value="Credit Card" ${obj.paymentMethod === 'Credit Card' ? 'selected' : ''}>Credit Card</option>
    <option value="Cash" ${obj.paymentMethod === 'Cash' ? 'selected' : ''}>Cash</option>
    <option value="Mobile" ${obj.paymentMethod === 'Mobile' ? 'selected' : ''}>Mobile</option>
  </select>
  </div>

  <div class="form-group">
    <label for="tip">Tip Amount</label>
    <input type="text" class="form-control" id="tip" placeholder="0" value="${obj.tipAmount || ''}" required>
  </div>
  
  <button type="submit" class="form-btn" id="closeOrder">Close Order</button>

</form>`;
  renderToDom('#paymentFormDiv', domString);
};

export default paymentForm;
