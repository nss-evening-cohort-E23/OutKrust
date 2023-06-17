import client from '../utils/client';

const endpoint = client.databaseURL;

const getAllOrders = () => new Promise((resolve, reject) => {
  // fetch is the function that has two parameters
  fetch(`${endpoint}/orders.json`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    }
  })
    // then is a function inside promise, input is of type Response
    // response and data are taco
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
        // creates an array of values from the object
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getClosedOrders = () => new Promise((resolve, reject) => {
  // fetch is the function that has two parameters
  fetch(`${endpoint}/orders.json?orderBy="is_open"&equalTo=false`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    }
  })
    // then is a function inside promise, input is of type Response
    // response and data are taco
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

export {
  getAllOrders,
  getClosedOrders
};
