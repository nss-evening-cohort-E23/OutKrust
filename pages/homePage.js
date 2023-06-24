import homePageEvents from '../events/homePageEvents';
import renderToDom from '../utils/renderToDom';

const showHomePage = () => {
  const domString = `
    <h1>Hey Ya! Welcome to OutKrust</h1>
    <button type="button" id="view-orders" class="btn-outkrust">View Orders</button>
    <button type="button" id="create-order" data-bs-toggle="modal" data-bs-target="#order-modal" class="btn-outkrust">Create an Order</button>
    <button type="button" id="view-revenue" class="btn-outkrust">View Revenue</button>
`;
  renderToDom('#home-page', domString);
  homePageEvents();
};

export default showHomePage;
