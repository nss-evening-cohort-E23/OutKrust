import renderToDom from '../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navbar"></div>
  <div id="mainDiv">
    <div id="homePage"></div>
    <div id="orderPage"></div>
    <div id="detailsPage"></div>
    <div id="orderFormDiv"></div>
    <div id="itemFormDiv"></div>
    <div id="paymentFormDiv"></div>
    <div id="revenuePage"></div>
  </div> 
  `;
  renderToDom('#app', domString);
};

export default domBuilder;
