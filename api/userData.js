import client from '../utils/client';

const endpoint = client.databaseURL;

const getUser = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/users.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // looks for keys in the database.json and if it has the keys, it will take the firebase key as(data).
      if (Object.keys(data).length !== 0) {
        // takes that keys into the data and gets the value of the 1st key&values.
        resolve(Object.values(data)[0]);
      } else {
        resolve({});
      }
    })
    .catch(reject);
});

const postUser = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/users.json`, {
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

const patchUser = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/users/${payload.user_id}.json`, {
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
  getUser,
  postUser,
  patchUser
};
