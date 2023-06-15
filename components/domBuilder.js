import renderToDom from '../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <header>
    <div id="navbar"></div>
  </header>
  <main>
    <div id="homePage"></div>
    <div id="orderFormDiv"></div>
    <div id="itemFormDiv"></div>
    <div id="paymentFormDiv"></div>
    <div 
  </main>
  `;
  renderToDom('#app', domString);
};

export default domBuilder;

//forms will render to their specific div containers
//order cards will render to homePage
//revenue page will render to homePage
//item details will render to its own container
