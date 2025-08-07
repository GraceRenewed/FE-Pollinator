import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getAllPlants = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/Plant`, {
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

const getPlantsByUserUid = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/Plant/user/${uid}`, {
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

const getPlantsByPollinatorId = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/Plant/pollinator/${id}`, {
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

const getPlantsById = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/Plant/${id}`, {
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

const createPlant = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/Plant`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updatePlant = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/Plant/${payload.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deletePlant = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/Plant/${id}`, {
    method: 'DELETE',
    headers: { 'Conent-Type': 'application/json' },
  })
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getAllPlants, getPlantsByUserUid, getPlantsByPollinatorId, getPlantsById, createPlant, updatePlant, deletePlant,
};
