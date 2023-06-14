import renderToDom from '../../utils/renderToDom';

const domString = `
<h1>Welcome!</h1>
<button type="button" class="btn btn-success">View Orders</button>
<button type="button" class="btn btn-info">Create an Order</button>
<button type="button" class="btn btn-warning">Warning</button>
`;
renderToDom('#homePage', domString);
