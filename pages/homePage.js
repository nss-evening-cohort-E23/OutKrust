import renderToDom from '../../utils/renderToDom';

const home = () => {
  const domString = `
    <h1>Welcome!</h1>
    <button type="button" class="btn btn-success" id="viewOrderBtn">View Orders</button>
    <button type="button" class="btn btn-info" id="createOrderBtn">Create an Order</button>
    <button type="button" class="btn btn-warning" id="viewRevenueBtn">View Revenue</button>`;
    
    renderToDom('#homePage', domString);
};

export default home;
