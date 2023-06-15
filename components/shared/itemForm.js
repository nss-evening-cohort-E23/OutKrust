import renderToDom from '../../utils/renderToDom';

const itemForm = () => {
  const domString = `

<form id="order" class="mb-4">
 
  <div class="form-group">
    <label for="menu-item">Add Item</label>
    <select id="menu-item" name="menu-item" required>
      
    </select>
  </div>
  <div class="form-group">
  <label for="new-item-name">New item</label>
  <input type="text" class="form-control" id="new-item-name" name="new-item-name">
</div>
<div class="form-group">
  <label for="new-item-price">New Price</label>
  <input pattern="^d*.d{2}$"class="form-control" id="new-item-price" name="new-item-price">
</div>

  <button type="submit" class="form-btn" id="submitOrder">Close Order</button>
</form>`;
  renderToDom('#homePage', domString);
};

export default itemForm;
