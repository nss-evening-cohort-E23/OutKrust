import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const revenuePage = () => {
  document.querySelector("#viewRevenue").addEventListener("click", () => {
    cardsOnDom(students);
  });
  const domString = `
  <h1 class="revenue-text">REVENUE</h1>
  <h1 class="total-revenue">TOTAL REVENUE</h1>
  <P>DATE RANGE: </P>
  <P>Total call in orders: </P>
  <P>Total walk in orders: </P>
  <P>Payment Types: </P>
  <ol>
    <li>Cash - </li>
    <li>Credit - </li>
    <li>Mobile - </li>
  </ol>
  `;
  renderToDOM('#viewRevenue', domString);
};
export default revenuePage;
