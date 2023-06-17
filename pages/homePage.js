import renderToDom from '../utils/renderToDom';

const showHomePage = () => {
  const domString = `
<h1>Welcome!</h1>
<button type="button" id="view-orders" class="btn btn-success">View Orders</button>
<button type="button" id="create-order" data-bs-toggle="modal" data-bs-target="#order-modal" class="btn btn-info">Create an Order</button>
<button type="button" id="view-revenue" class="btn btn-warning">View Revenue</button>
`;
  renderToDom('#homePage', domString);
};

export default showHomePage;
