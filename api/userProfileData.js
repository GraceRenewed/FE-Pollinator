import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getAllUsers = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/UserProfile`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
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

const getSingleUser = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/UserProfile/${uid}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
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

const createUser = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/UserProfile`, {
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

const updateUser = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/UserProfile/${payload.uid}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteUser = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/customers/${uid}`, {
    method: 'DELETE',
    headers: {
      'Conent-Type': 'application/json',
    },
  })
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getAllUsers, getSingleUser, createUser, updateUser, deleteUser,
};
