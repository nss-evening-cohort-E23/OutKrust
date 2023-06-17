import client from '../utils/client';

const endpoint = client.databaseURL;

const getAllOrders = () => new Promise((resolve, reject) => {
  // fetch is the function that has two parameters
  fetch(`${endpoint}/orders.json`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
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
      'content-type': 'application/json'
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

const getSingleOrder = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const deleteOrder = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entires/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
const createOrder = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entires.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateOrder = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entires/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export {
  getAllOrders,
  getClosedOrders,
  getSingleOrder,
  deleteOrder,
  createOrder,
  updateOrder,
};
