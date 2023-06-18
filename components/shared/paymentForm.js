import renderToDom from '../../utils/renderToDom';

const paymentForm = (obj = {}) => {
  const domString = `<div id="payFormDiv">
  <form id="payment" class="mb-4">
  
  <div class="form-group">
  <label for="payType">Payment Type</label>
  <select id="payType" name="paymentOption" value="${obj.payment_method || ''}" required>
    <option value="Credit Card" ${obj.payment_method === 'Credit Card' ? 'selected' : ''}>Credit Card</option>
    <option value="Cash" ${obj.payment_method === 'Cash' ? 'selected' : ''}>Cash</option>
    <option value="Mobile" ${obj.payment_method === 'Mobile' ? 'selected' : ''}>Mobile</option>
  </select>
  </div>

  <div class="form-group">
    <label for="tip">Tip Amount</label>
    <input type="text" class="form-control" id="tip" placeholder="0" value="${obj.tip_amount || ''}" required>
  </div>
  
  <button type="submit" class="form-btn" id="closeOrder">Close Order</button>

</form>
  </div>
  `;
  renderToDom('#homePage', domString);
};

export default paymentForm;
