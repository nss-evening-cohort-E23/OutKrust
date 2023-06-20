// import file here

import { getClosedOrders } from '../api/orderData';
import renderToDom from '../utils/renderToDom';
import showChart from './chart';

// It holds all orders from api
const updateRevenueInfo = (orders) => {
  if (!orders || orders.length === 0) {
    renderToDom('#revenue-info', '<div>There are no closed orders.</div>');
    return;
  }

  // variables to hold the values
  let totalRevenue = 0;
  // here min and maxDate are kept undefined to make it get true in the if statement below
  let minDate;
  let maxDate;
  let totalTip = 0;
  let totalCallInOrders = 0;
  let totalWalkInOrders = 0;
  let totalCashPayments = 0;
  let totalCreditPayments = 0;
  let totalMobilePayments = 0;

  // checks each item in the orders database
  orders.forEach((order) => {
    totalRevenue += order.total_price;
    // new date is an inbuilt class, which converts the value of the timestamp into date format object
    const orderDate = new Date(order.timestamp);
    /* mindate is undefined(false) and !undefined(true). If its true it goes and takes the current value as mindate, otherwise it compares with the current date and previous mindate and prints the mindate */
    if (!minDate || orderDate < minDate) {
      minDate = orderDate;
    }
    // same as mindate
    if (!maxDate || orderDate > maxDate) {
      maxDate = orderDate;
    }
    totalTip += order.tip_amount;
    // it picks the keyvalue and checks for the matching string
    if (order.order_type === 'Call-In') {
      totalCallInOrders += 1;
    } else if (order.order_type === 'Walk-In') {
      totalWalkInOrders += 1;
    }

    if (order.payment_method === 'Cash') {
      totalCashPayments += 1;
    } else if (order.payment_method === 'Credit') {
      totalCreditPayments += 1;
    } else if (order.payment_method === 'Mobile') {
      totalMobilePayments += 1;
    }
  });

  const domString = `
    <div class="d-flex flex-column justify-content-center align-items-center">
      <h1 class="page-title">REVENUE</h1>
      <h1 class="page-title">TOTAL REVENUE: ${totalRevenue}</h1>
      <h4 class="page-title">Order Date Range: ${minDate.toLocaleDateString()} to ${maxDate.toLocaleDateString()}</h4>
      <h4 class="page-title">Total Tips: ${totalTip}</h4>
      <h4 class="page-title">Total call-in orders: ${totalCallInOrders}</h4>
      <h4 class="page-title">Total walk-in orders: ${totalWalkInOrders}</h4>
      <h3 class="page-title">Payment Types:</h3>
      <h3 class="page-title">Cash - ${totalCashPayments}</h3>
      <h3 class="page-title">Credit - ${totalCreditPayments}</h3>
      <h3 class="page-title">Mobile - ${totalMobilePayments}</h3>
    </div>
  `;
  // showRevenuePage's div-id
  renderToDom('#revenue-info', domString);
};

const showRevenuePage = () => {
  const domString = `
      <div id="date-range" class="d-flex flex-row justify-content-center align-items-center gap-20">
        <label for="start-date">Start Date: </label>
        <input id="start-date" class="form-control" type="datetime-local" />
        <label for="end-date">End Date: </label>
        <input id="end-date" class="form-control" type="datetime-local" />
        <button type='submit' id="date-range-calculate">Run</button>
      </div>
      <canvas id="myChart" style="width:100%;max-width:700px"></canvas>
      <div id="revenue-info"></div>`;
  // revenue-info is like a placeholder which displays the updateRevenueInfo's domstring
  renderToDom('#homePage', domString);
  showChart();
  // calling the api,getting all closed orders and sending it to updateRevenueInfo
  getClosedOrders().then((orders) => updateRevenueInfo(orders));

  document.querySelector('#date-range-calculate').addEventListener('click', () => {
    const startDate = new Date(document.querySelector('#start-date').value);
    // https://bobbyhadz.com/blog/javascript-add-1-day-to-date
    const endDate = new Date(document.querySelector('#end-date').value);
    endDate.setDate(endDate.getDate() + 1);

    getClosedOrders().then((orders) => {
      const filteredOrders = orders.filter((o) => {
        const orderDate = new Date(o.timestamp);
        console.warn(startDate);
        // https://www.tutorialspoint.com/How-to-check-whether-a-JavaScript-date-is-valid
        return (Number.isNaN(startDate.getTime()) || orderDate >= startDate)
          && (Number.isNaN(endDate.getTime()) || orderDate <= endDate);
      });
      updateRevenueInfo(filteredOrders);
    });
  });
};

export {
  showRevenuePage,
  updateRevenueInfo
};
